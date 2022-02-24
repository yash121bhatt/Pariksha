import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
url="http://127.0.0.1:8000/api/auth/";
  constructor( private http:HttpClient) { }

  public quizzes()
  {
    return this.http.get(this.url + 'list-quiz/');
  }

  //Quiz Function

  public addQuiz(quiz:any)
  {
    return this.http.post(this.url + 'add-quiz',quiz);
  }

  public deleteQuiz(id:any)
  {
    return this.http.delete(this.url + 'delete-quiz/'+ id);
  }

  public getQuiz(id:any)
  {
    return this.http.get(this.url + 'edit-quiz/'+ id);
  }
    
  public getQuiz2(catName:any)
  {
    return this.http.get(this.url + 'get-quiz/'+ catName); 
  }
  
  
   public updateQuiz(quiz:any)
   {
    //  console.log("this is a my data");
    // console.log(quiz);
      return this.http.post(this.url + 'update-quiz/' + quiz.id, quiz);
   }

   

}
