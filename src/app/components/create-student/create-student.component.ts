import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public createForm : FormGroup = new FormGroup({
    name : new FormControl(),
    gender : new FormControl(),
    mobile : new FormControl(),
    email : new FormControl(),
    batch : new FormControl(),
    //  nested form
      address: new FormGroup({
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
    
      }),

      // form array 
      educationArray : new FormArray([])
  })

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
      percentage : new FormControl(),
     })
    )
  }

  // formarray delete 
  delete(i:number){
    this.educationFormArray.removeAt(i)
  }

  submit(){
    console.log(this.createForm)
  }

}
