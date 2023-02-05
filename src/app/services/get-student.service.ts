import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetStudentService {

  constructor(private _httpClient:HttpClient) { }

  getData():Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students')
  }

  filterData(term:any):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students?filter=' + term)
  }

  sortData(column:any, order:any):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students?sortBy=' + column + '&order=' + order)
  }

  pagination(pageno:any):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=10&page=' + pageno)
  }


  getSingelData(id:any):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students/'+ id)
  }


  createStudent(data:any):Observable<any>{
    return this._httpClient.post('https://62b9299dff109cd1dc8ca34f.mockapi.io/students', data)
  }


  updateStudent(data:any, id:any):Observable<any>{
    return this._httpClient.put('https://62b9299dff109cd1dc8ca34f.mockapi.io/students/' + id , data)
  }

  delete(id:any):Observable<any>{
    return this._httpClient.delete('https://62b9299dff109cd1dc8ca34f.mockapi.io/students/'+ id)
  }

}
