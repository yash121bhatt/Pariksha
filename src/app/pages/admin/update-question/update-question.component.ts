import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  ID:any;
  TiTle:any;
  update_question:any;
  result = {};

  constructor(private ques:QuestionService, private route:ActivatedRoute, private snak:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  this.ID = this.route.snapshot.params.id;
  this.TiTle = this.route.snapshot.params.title;
  this.ques.getQuestion(this.ID).subscribe((data:any)=>{
    this.result = data.response[0];
    this.update_question = this.result;
    console.log(this.update_question);
  },(error:any)=>{
    console.log(error);
  }
  );
  }

  updateQuestions()
  {
     if(this.update_question.content.trim()== '' || this.update_question.content == null)
     {
      this.snak.open('Title Required !!', '',{
        duration:3000,
      });
      return;
     }
     if(this.update_question.option1.trim()== '' || this.update_question.option1 == null)
     {
      this.snak.open('Title Required !!', '',{
        duration:3000,
      });
      return;
     }
     if(this.update_question.option2.trim()== '' || this.update_question.option2 == null)
     {
      this.snak.open('Title Required !!', '',{
        duration:3000,
      });
      return;
     }
     if(this.update_question.option3.trim()== '' || this.update_question.option3 == null)
     {
      this.snak.open('Title Required !!', '',{
        duration:3000,
      });
      return;
     }
     if(this.update_question.option4.trim()== '' || this.update_question.option4 == null)
     {
      this.snak.open('Title Required !!', '',{
        duration:3000,
      });
      return;
     }
     if(this.update_question.answer.trim()== '' || this.update_question.answer == null)
     {
      this.snak.open('Title Required !!', '',{
        duration:3000,
      });
      return;
     }
     this.ques.updateQuestion(this.update_question, this.ID).subscribe((data:any)=>{
       console.log("conFst");
       console.log(this.ID);
       Swal.fire('Success !!','Update Question Succesfully !!','success').then((e)=>{
         this.router.navigate(['/admin/view-question/']);
         console.log(this.update_question);
       });
     },
     (error)=>{
       Swal.fire('Error !!','Update Question Error','error');
       console.log(error);
     }
        );
  }

}
