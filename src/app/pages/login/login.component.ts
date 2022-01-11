import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData={
  username:'',
  password:'',
};
  constructor(private snak:MatSnackBar, private login:LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  formSubmit()
  {
  
    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
        this.snak.open("username is required !!",'',{
          duration:3000,
        });
        return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
        this.snak.open("password is required !!",'',{
          duration:3000,
        });
        return;
    }
    //requrest to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        //Login...

        this.login.loginUser(data.access_token);

        this.login.getCurrentUser().subscribe(
           (user:any)=>{
             this.login.setUser(user);
            //  console.log(user);
            //  console.log(this.login.getUserRole());
            //  console.log(localStorage.getItem("user"));
             //redirect ...Admin: admin-dashbord
             //redirect ...Normal:normal-user-dashbord
            //  console.log(this.login.getUserRole());
             if(this.login.getUserRole() == 'ADMIN')
             {
               console.log("Admin");
              //  admin dashboard
                // window.location.href='/admin';
                this.router.navigate(['/admin']);
                // this.login.loginStatusSubject.next(true);
             }else if(this.login.getUserRole() == 'USER')
             {
               console.log("getUserNormal");
              //  normal user dashboard
              //  window.location.href='/user-dashboard';
              this.router.navigate(['/user-dashboard']);
              // this.login.loginStatusSubject.next(true);
             }else{
               this.login.logout();
               location.reload();
             }
           }
        );

      },
      (error)=>{
         console.log("Error !!!");
         console.log(error);
         this.snak.open("Invalid Detail !! Try again",'',{
           duration:3000,
         })
      }
    );

  }

}


// function getDetail(getDetail:any) {
//   throw new Error('Function not implemented.');
// }

