import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
public Editor = ClassicEditor;

qId:any;
qtitle:any;
question={
  quizId:'',
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
}


  constructor(private route:ActivatedRoute,private frmBuilder : FormBuilder,private _Question:QuestionService) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.id;
    this.qtitle = this.route.snapshot.params.title;
    // console.log(this.qId);
    this.question.quizId = this.qId;
  }

  formSubmit()
  {
    if(this.question.content.trim()=='' || this.question.content==null)
    {
        return;
    }
    if(this.question.option1.trim()=='' || this.question.option1==null)
    {
        return;
    }
    if(this.question.option2.trim()=='' || this.question.option2==null)
    {
        return;
    }
    if(this.question.option3.trim()=='' || this.question.option3==null)
    {
        return;
    }
    if(this.question.option4.trim()=='' || this.question.option4==null)
    {
        return;
    }
    //form submit
    this._Question.addQuestion(this.question).subscribe((data:any)=>{
      Swal.fire('Success','Question Added','success');
    },(error:any)=>{
      Swal.fire('Error','Error in adding question','error');
    }
    );
  }
  


}
