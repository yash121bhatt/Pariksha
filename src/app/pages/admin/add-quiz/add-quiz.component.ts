import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories : any;

  quizData={
    title:'',
    desc:'',
    maxMark:'',
    numberOfQuestion:'',
    category: '',
    active:true,
  }
  constructor(private cat:CategoryService,private snak:MatSnackBar,private quiz:QuizService) { }

  ngOnInit(): void {
    
    this.cat.categories().subscribe(
      (data:any)=>{
        //category load
        this.categories=data.response;
        // console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','error in loading data server','error');
      }
    );

  }

  addQuiz(){
     
     if(this.quizData.title.trim()=='' || this.quizData.title==null)
     {
        this.snak.open('Title Required !!', '',{
          duration:3000,
        });
        return;
     }
      console.log(this.quizData)
     this.quiz.addQuiz(this.quizData).subscribe(
       (data:any)=>{
         Swal.fire('Success','Quiz is Added','success')
         this.quizData={
         title:'',
         desc:'',
         maxMark:'',
        numberOfQuestion:'',
        category:'',
      active:true,
      };
       },
       (error:any)=>{
         Swal.fire('Error !!','Error while adding quiz','error')
       }
     );
     
       

  }

}
