import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetStudentService } from 'src/app/services/get-student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  public studentDetails : any = []


    constructor(private _service:GetStudentService , private _activateRouter:ActivatedRoute){
      _activateRouter.params.subscribe(
        (data:any) => {
          _service.getSingelData(data.id).subscribe(
            (data1:any)=> {
                this.studentDetails = data1
            },
            (err:any) => {
              alert('error in getting singel id data')
            }
          )
        }
      )
    }
}
