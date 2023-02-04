import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public createForm : FormGroup = new FormGroup({
    name : new FormControl(null, [Validators.required]),
    gender : new FormControl(null, [Validators.required]),
    mobile : new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email : new FormControl(null, [Validators.required]),
    batch : new FormControl(null, [Validators.required]),
    //  nested form
      address: new FormGroup({
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(null ,[Validators.required]),
        state: new FormControl(),
        pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
    
      }),

      // form array 
      educationArray : new FormArray([]),

        // nested form 
      companyForm : new FormGroup({
        name: new FormControl(),
        location: new FormControl(),
        package: new FormControl(),
        offerDate: new FormControl(),
      }),
      // dynamic form
      type : new FormControl(),
      sourcefrom: new FormControl(),
      referal : new FormControl()


  })


constructor(private _service:StudentsService){}

  // declaring form array as a variable
  get educationFormArray(){
    return this.createForm.get('educationArray') as FormArray
  }
// form array creation when button clicked
  add(){
    this.educationFormArray.push(
     new FormGroup({
      qualification : new FormControl(),
      year : new FormControl(),
      percentage : new FormControl(null,[Validators.required ,Validators.min(0), Validators.max(100)]),
     })
    )
  }

  // formarray delete 
  delete(i:number){
    this.educationFormArray.removeAt(i)
  }

  submit(){
    console.log(this.createForm)
    this._service.createStudent(this.createForm.value).subscribe(
      (data:any) => {
        alert('Student Created Sucessfully')
      },
      (err:any) => {
        alert('Creation failed')
      }
    )
  }


}
