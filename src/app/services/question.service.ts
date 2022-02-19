import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  filter(arg0: (q: any) => boolean): QuestionService {
    throw new Error('Method not implemented.');
  }
  url="http://127.0.0.1:8000/api/auth/"
  constructor(private http:HttpClient) { }
 
  public getQuestionsOfQuiz(qid:any)
  {
     return this.http.get(this.url + 'list-ques/'+qid);
  }
  
  //Add Question

  public addQuestion(question:any)
  {
     return this.http.post(this.url + 'add-ques/', question);
  }

  //Delete Question

  public deleteQuestion(deleteId:any)
  {
   return this.http.delete(this.url + 'delete-ques/'+ deleteId);
  }

  //Update Question

  public updateQuestion(uQID:any,id:any)
  {
    console.log("hello");
    console.log(id);
    return this.http.post(this.url + 'update-ques/'+id,uQID);
  }

  // get Question

  public getQuestion(getQuesId:any)
  {
    return this.http.get(this.url + 'get-ques/'+getQuesId);
  }
 

}
