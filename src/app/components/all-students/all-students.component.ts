import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetStudentService } from 'src/app/services/get-student.service';



@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {

  public studentDetails: any = [] ;
  public keys : any = {} ;

  public pages : number = 0 ;
  public j : number[] = [] ;

  public term : string = '' ;
  public column : string = '' ;
  public order : string = '' ;



  constructor(private _service:GetStudentService , private _router:Router){

    _service.getData().subscribe(
      (data:any) =>{

        // for displaying first 10 items using slice
        this.studentDetails = data.slice(0, 10)
        // for displaying number of data like (0,1,2,3,4,5...)
        this.keys = Object.keys(data)
        // console.log(this.keys.length)


        // for dividing total number of items for pagination
        this.pages = Math.floor(this.keys.length / 10)

        // console.log(this.pages)


        // for adding every number to the j for iterating pagination
        var number : number = this.pages
        for(let i=0 ;i < number + 1 ; i++ )
        this.j.push(i)
        // console.log(i)
        
       
      },
      (err) => {
        alert('error in gettimg data')
      }
    )

  }





  filter(){
    this._service.filterData(this.term).subscribe(
      (data) => {
        this.studentDetails = data
      },
      (err) => {
        alert('Failed to loading filter')
      }
    )
  }

  sorting(){
    this._service.sortData(this.column,this.order).subscribe(
      (data:any) => {
        this.studentDetails = data
      },
      (err:any) => {
        alert('Failed to load sorting')
      }
    )
  }

  pagination(pageno:number){
    this._service.pagination(pageno).subscribe(
      (data:any) => {
        this.studentDetails = data
      },
      (err:any) => {
        alert('error occur in pagination')
      }
    )
  }

  view(id:number){
      this._router.navigateByUrl('/dashboard/student-details/' + id)
  }

  edit(id:number){
    this._router.navigateByUrl('/dashboard/edit-details/' + id)
  }


  delete(id:any){
    this._service.delete(id).subscribe(
      (data) => {
        location.reload()
        alert('Deleted successfully')
      },
      (err:any) => {
        alert('Deleted Unsucessful')
      }
    )
  }


}
