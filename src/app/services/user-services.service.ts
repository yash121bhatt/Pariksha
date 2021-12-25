import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  url="http://127.0.0.1:8000/api/auth/"
  constructor( private http:HttpClient) { }
  //add user
   
  public addUser(user:any)
  {
      return this.http.post(this.url+'add-student',user);
  }
}
