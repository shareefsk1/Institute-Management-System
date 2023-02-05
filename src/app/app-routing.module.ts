import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AuthGuard } from './Guards/auth.guard';
import { NotifyGuard } from './Guards/notify.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard], children:[
    {path:'createStudent', component:CreateStudentComponent , canDeactivate:[NotifyGuard]},
    {path:'allStudents', component:AllStudentsComponent},
    {path:'student-details/:id', component:StudentDetailsComponent},
    {path:'edit-details/:id', component:CreateStudentComponent}
  ] },
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
