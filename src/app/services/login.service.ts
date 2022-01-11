import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://127.0.0.1:8000/api/auth/"
  constructor(private http: HttpClient) { }

  public loginStatusSubject=new Subject<boolean>();

  //current user: which is Loggedin
  public getCurrentUser()
  {
      return this.http.get(this.url+'userDetails/');
  }

  //generate token
    
  public generateToken(loginData: any){

    return this.http.post(this.url+'add-login/',loginData);
  }
  //login user: set token in loginStroage
  public loginUser(token:any)
  {
       localStorage.setItem("access_token",token);
       this.loginStatusSubject.next(true);
       return true;
  }

  //isLogin : user is logged in or not
  public isLoggedIn()
  {
    let tokenStr=localStorage.getItem("access_token")
    if(tokenStr==undefined || tokenStr == '' || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }
  //Logout : remove token form local
  public logout()
  {
    localStorage.removeItem("access_token")
    return true;
  }
  //get token
  public getToken()
  {
    return localStorage.getItem("access_token");
  }
  
  //set userDetail
  public setUser(user:any)
  {
     localStorage.setItem("user",JSON.stringify(user));
    //  localStorage.setItem("username",user['username']);
  }
  //getUser
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null)
    {
       return JSON.parse(userStr);

    }else{
      this.logout();
      return null;
    }
  }
  //get user role

  public getUserRole()
  {
    let user=this.getUser()
    return user.user_type;
  }

}
