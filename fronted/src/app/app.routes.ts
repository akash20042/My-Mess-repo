import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MessManagersComponent } from './pages/mess-managers/mess-managers.component';
import { MessEmployeesComponent } from './pages/mess-employees/mess-employees.component';
import { StudentsComponent } from './pages/students/students.component';
import { MessDetailsComponent } from './pages/mess-details/mess-details.component';
import { StudentManagemntComponent } from './pages/student-managemnt/student-managemnt.component';
import { EmployeManagementComponent } from './pages/employe-management/employe-management.component';
import { MessManagementComponent } from './pages/mess-management/mess-management.component';
import { ComplainPageComponent } from './pages/complain-page/complain-page.component';

export const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
     redirectTo:"login"
  },
  {
    path:"login",
    component: LoginComponent,
  },
  {
     path:"",
     component:LayoutComponent,
      children:[
               {
                  path:"admin",
                  component:AdminComponent
               } ,
               {
                  path:"manager",
                  component:MessManagersComponent
               } ,
               {
                  path:"employee",
                  component:MessEmployeesComponent
               } ,
               {
                  path:"student",
                  component:StudentsComponent
               } ,
               {
                  path:"messDetails",
                  component:MessDetailsComponent
               } ,
               {
                  path:"studentManagement",
                  component:StudentManagemntComponent
               } ,
               {
                  path:"employeeManagement",
                  component:EmployeManagementComponent
               } ,
               {
                  path:"messManagement",
                  component:MessManagementComponent
               } ,
               {
                  path:"complain",
                  component:ComplainPageComponent
               } ,

              ]
  },


];
