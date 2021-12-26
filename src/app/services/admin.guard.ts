import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router)
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("hello");
    if(this.login.isLoggedIn() && this.login.getUserRole()=='ADMIN')
    {
      console.log(this.login.isLoggedIn());
      console.log("is True");
      return true;
    }
    console.log("ABCD");
     this.router.navigate(['login']);
    
     console.log("is false");
    return false;
  }
  
}
