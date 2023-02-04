import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpclient:HttpClient) { }

  createStudent(data:any):Observable<any>{
    return this._httpclient.post('https://62b9299dff109cd1dc8ca34f.mockapi.io/students', data)
  }

}
