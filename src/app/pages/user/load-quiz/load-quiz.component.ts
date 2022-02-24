import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private router:ActivatedRoute,private _quiz:QuizService) { }
  // catId:any;
  quizss:any;
  catName:any
  ngOnInit(): void {
    this.catName=this.router.snapshot.params.catName;

    this.router.params.subscribe((params)=>{
      this.catName = params.catName;
      if(this.catName==0)
      {
        console.log("Load all the quiz");
  
       this._quiz.quizzes().subscribe((data:any)=>{
         this.quizss=data.response;
         console.log(this.quizss);
       },
       (error:any)=>{
          console.log(error);
          alert("Error!!");
       }
       );
  
      }
      else
      {
        console.log("specific quiz");
        this._quiz.getQuiz2(this.catName).subscribe((data:any)=>{
          this.quizss = data.response;
          console.log(this.quizss);
        },
        (error:any)=>{
          console.log(error);
          alert("error!!");
        }
           );
        
      }
  
    });
  
  }

}
