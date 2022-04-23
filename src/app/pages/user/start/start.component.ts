import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qid:any;
   question:any;
   markGot=0;
   currectAnswer=0;
   attempted=0;

  constructor(private locationSt:LocationStrategy, private route:ActivatedRoute, private _question:QuestionService) { }
   
  ngOnInit(): void {
    this.preventbackbutton();
     this.qid = this.route.snapshot.params.id;
     console.log(this.qid);
     this.loadQuestion()
  }
  loadQuestion() {
    this._question.getQuestionsOfQuiz(this.qid).subscribe((data:any)=>{
      // console.log(data);
      this.question = data.response;
      this.question.forEach((q:any) => {
        q['givenAnswer'] = '';
      });
      console.log(this.question);
    },(error:any)=>{
      console.log(error);
      Swal.fire("Error","Error in loading question of quiz","error");
    }
    );
  }

  preventbackbutton()
  {
    history.pushState(null,location.href);
    this.locationSt.onPopState(()=>{
      return history.pushState(null, location.href);
    });
  }

  givenAnswerFun(answer:any, question:any, index:any) {
     let asignQuestion:any = this.question;
     asignQuestion[index].givenAnswer = answer;
     console.log(asignQuestion)


  }

}
