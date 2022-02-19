import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
category:any
  constructor(private _cat:CategoryService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this._cat.categories().subscribe((data:any)=>{
       this.category = data.response;
    },
    (error:any)=>{
          this.snack.open("Error in loding Categories from server",'',{
            duration:3000,
          })
    }
    )
  }

}
