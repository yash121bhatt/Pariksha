import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url="http://127.0.0.1:8000/api/auth/"
  
  constructor(private http:HttpClient) { }
  //Load all the category 

  public categories()
  {
    return this.http.get(this.url+'list-Category/');
  }
}
