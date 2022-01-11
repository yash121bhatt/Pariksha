import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  constructor( private userService:UserServicesService,private snake:MatSnackBar) { }

  public user ={
    username: "",
    password:"",
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
  }

  ngOnInit(): void {
  }
  formSubmit()
  {
    console.log(this.user);
    if(this.user.username== '' || this.user.username ==null)
    {
    //  alert("user is  required ")
    this.snake.open("User name is required !!",'',{
      duration:3000,
      verticalPosition: 'top',
      horizontalPosition:'right'
    });
     return;
    }
    //addUser userService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        // console.log("hello................................");
        // alert('success');
        Swal.fire('Success down !!','User id is ' + data.user.id,'success');
      },
      (error:any): void => {
        //error
        console.log(error);
        // alert('error');
        this.snake.open("something went wront !!",'',{
          duration:3000,
        })
      }
    );
  }
}


