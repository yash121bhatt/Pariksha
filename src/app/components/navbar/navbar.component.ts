
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginUser:any;
  constructor(private router:Router) { }
  ngOnInit(): void {
    this.loginUser=localStorage.getItem('access_token');
    console.log(this.loginUser);
  }
  
  logoutUser() {
       
    localStorage.clear();
    this.router.navigate(['/login']);
    
}

}
