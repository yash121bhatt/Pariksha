import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
 qId:any;
 qtitle:any;
 question:any;
  constructor(private route:ActivatedRoute,private questions:QuestionService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  this.qId = this.route.snapshot.params.id;
  this.qtitle = this.route.snapshot.params.title;
  this.questions.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
    console.log(data);
    this.question = data.response;
  },(error:any)=>{
    console.log(error);
  })
  }
  //delete Question
  deleteQuestions(id: any)
  {
    
    Swal.fire({
      icon : 'warning',
      'title' : "Are you sure,Want to delete this question ?",
      confirmButtonText : 'Delete',
      showCancelButton : true,
    }).then((result)=>{
       if(result.isConfirmed)
       {
         //confirm
         this.questions.deleteQuestion(id).subscribe((data:any)=>{
           this.snak.open('Question Deleted','',{
             duration:3000,
           });
           this.questions=this.questions.filter((q)=>q.id!=id);
         },
         (error:any)=>{
           this.snak.open('Error in Delete Question','',{
             duration:3000,
           });
           console.log(error);
         });
       }
    });
    }

}
