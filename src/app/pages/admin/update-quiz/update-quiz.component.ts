import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route:ActivatedRoute,private quiz:QuizService,private cat:CategoryService,public snak:MatSnackBar,private router:Router) { }
   
  Id = 0;
  quizs:any;
  categories:any;
  result = {};

  ngOnInit(): void {
    
   this.Id = this.route.snapshot.params.id;
  //  alert(this.Id);
 this.quiz.getQuiz(this.Id).subscribe(
   (data:any)=>{
    this.result = data.response[0];
    this.quizs = this.result; 
      console.log(this.quizs);
   },
   (error:any)=>{
     console.log(error);
   }
 );
 this.cat.categories().subscribe((data:any)=>{
   this.categories = data.response;
 },
 (error:any)=>{
  //  alert("Error");
 }
 );

  }

  //update form submit

  public updateForm()
  {
    // validatate
    if(this.quizs.title.trim()== '' || this.quizs.title == null)
    {
       this.snak.open('Title Required !!', '',{
         duration:3000,
       });
       return;
    }

    this.quiz.updateQuiz(this.quizs).subscribe((data:any)=>{
      Swal.fire("Success !!",'Update Successfully','success').then((e)=>{
        this.router.navigate(['/admin/quiz']);
        console.log(data);
      });

    },
    (error:any)=>{
      Swal.fire("Error !!",'Sever Error','error');
      console.log(error);
    }
    );


  }
 

}
