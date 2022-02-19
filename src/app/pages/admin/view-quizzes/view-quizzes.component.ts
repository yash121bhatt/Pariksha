import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
 quizzes : any;
  constructor(private quiz:QuizService) { }

  ngOnInit(): void {

    this.quiz.quizzes().subscribe((data:any) => {
       this.quizzes = data.response;
       console.log(this.quizzes);
     },
     (error)=>{
       console.log(error);
       Swal.fire('Error !',"Error in loding datab !!",'error')
     }
    );
  }
  deleteQuiz(id:any)
  {
     Swal.fire({
       icon : 'warning',
       'title' : "Are you sure !",
       confirmButtonText : 'Delete',
       showCancelButton : true,

     }).then((result)=>{

       if(result.isConfirmed)
       {
          this.quiz.deleteQuiz(id).subscribe(
        (data:any)=>{
          this.quizzes = this.quizzes.filter((quiz:any) => quiz.id !=id);
          Swal.fire('Success','Quiz is deleted','success');
       },
      (error:any)=>{
        Swal.fire('Error !!','Error in deleting quiz','error');
      } 
       );

       }

     });
  }

}
