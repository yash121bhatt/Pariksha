import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  cat={
     title:'',
     desc:'',
  }

  constructor(private category:CategoryService,private snak:MatSnackBar) { }

  ngOnInit(): void {
    
  }

  formSubMit()
  {
    if(this.cat.title.trim() == '' || this.cat.title == null){
          this.snak.open("Title Required !!",'',{
          duration:3000
        })
         return;
    }
   //all done
     
    this.category.addCategory(this.cat).subscribe(
      (data:any)=>{
        this.cat.title='',
        this.cat.desc='',
        Swal.fire("success !!",'Category Is Added Successfully !!','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!",'Server Error !!','error');
      }

    )  

  }

 

}
