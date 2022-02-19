import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'user-dashboard',component:UserDashboardComponent,canActivate : [NormalGuard],
children:[{path:':catName',component:LoadQuizComponent}]},
  {path:'admin',component:DashboardComponent,canActivate: [AdminGuard],
   children:[{path:'',component:WelcomeComponent},{path:'profile',component:ProfileComponent},
   {path:'categories',component:ViewCategoriesComponent,pathMatch:'full'},
   {path:'addcategory',component:AddCategoryComponent,pathMatch:'full'},
   {path:'quiz',component:ViewQuizzesComponent,pathMatch:'full'},
   {path:'add-quiz',component:AddQuizComponent,pathMatch:'full'},
  {path:'quiz/:id',component:UpdateQuizComponent,pathMatch:'full'},
  {path:'view-question/:id/:title',component:ViewQuizQuestionsComponent,pathMatch:'full'},
  {path:'add-question/:id/:title',component:AddQuestionComponent,pathMatch:'full'},
  {path:'update-question/:id/:title',component:UpdateQuestionComponent,pathMatch:'full'}, ]   },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
