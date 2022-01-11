
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginUser:any;
  // isLoggedIn = false;
   user:any;
   localData:any;
  constructor(public login:LoginService,private router:Router) { }
  ngOnInit(): void {
    this.loginUser=localStorage.getItem('access_token');
    console.log(this.loginUser);
    console.log("rohit");
    console.log(this.login.getUser());
    // this.user = localStorage.getItem('username');
    this.localData = localStorage.getItem('user');
    // console.log(JSON.parse(this.localData));
    this.user = JSON.parse(this.localData);
    // this.login.loginStatusSubject.asObservable().subscribe(data=>{
    //   this.isLoggedIn = this.login.isLoggedIn();
    //   this.user = this.login.getUser();

    // })
    
  }
  
  logoutUser() {
       
    localStorage.clear();
    this.router.navigate(['/login']);
    
}

// public logoutUser(){
//   this.login.logout();
//   this.login.loginStatusSubject.next(false);
//   localStorage.clear();
//  this.router.navigate(['/login']);
// }

}
