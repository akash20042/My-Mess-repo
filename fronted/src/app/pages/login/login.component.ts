import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

router = inject(Router)
private http = inject(HttpClient)

 loginonj:any ={
    username:"",
    email:"",
    password:'',
    role:""
  }
 data:any ;

onRegister(){
  this.http.post("http://localhost:3000/api/auth/register",this.loginonj).subscribe((res:any)=>{
     this.data =res;
      console.log(this.data);
      alert("registerd successfully")

    })
}


// login  api

 Log:any ={
    username:"",
    password:''

  }

logData:any ;

   onLog(){
    this.http.post("http://localhost:3000/api/auth/login",this.Log).subscribe((res:any)=>{
       this.logData =res;
        if(res.success){

              if(this.logData.data.role=="admin"){
                this.router.navigateByUrl("admin")

              }
              else if(this.logData.data.role=="user") {
                this.router.navigateByUrl("studentManagement")
              }
              else if(this.logData.data.role=="manager") {
                this.router.navigateByUrl("messManagement")
              }

        }else{
          alert(" something is wrong username or password")
        }

      //  this.router.navigateByUrl("admin")
      // alert(" User Login successfully")

    })

  }
}
