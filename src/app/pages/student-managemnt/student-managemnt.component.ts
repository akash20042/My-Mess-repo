import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-managemnt',
  imports: [NgIf, NgForOf , CommonModule ,FormsModule],
  templateUrl: './student-managemnt.component.html',
  styleUrl: './student-managemnt.component.scss'
})
export class StudentManagemntComponent implements OnInit {

 private http = inject(HttpClient)
 viewList:boolean = true ;

 

ngOnInit():void{
  this.getData()
}

 registerObj: any =  {
      id: "",
      name: "",
      photo: "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
      rollNo: "",
      class: "",
      state: "",
      behaviour: "",
      mess: "Mess A",
      eatingDays: "",
      joiningDate: "",

    }
  data:any[]=[] ;

   getData(){
    // debugger
        this.http.get("assets/userApi.json").subscribe((res:any)=>{
          // debugger
           this.data =res.students
           console.log(this.data);

        })
   }

   createStudent(){

     this.http.get("assets/userApi.json").subscribe((res:any)=>{

           this.data.unshift(this.registerObj)
           alert(" user created")

           console.log(this.data);

        })
   }

   deletStudent(id:number){


            const isdelete = confirm("are you sure ,want to delete")
            if(isdelete){
            this.http.get("assets/userApi.json").subscribe((res:any)=>{

            alert(" user deletd success fully")
             console.log(this.data);

              })
            }

   }
   updata:any;

   onEdit(mydata:any){
        this.viewList =false
        this.registerObj =mydata



   }

updataStudent(){

   this.http.get("assets/userApi.json").subscribe((res:any)=>{
       this.updata=res.updateStudent[0]
           if(this.updata.result){

            alert(this.updata.message)
             this.data.unshift(this.registerObj)
             this.getData()
             this.viewList =true

           }

              })
}

}
