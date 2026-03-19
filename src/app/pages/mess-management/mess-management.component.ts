import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mess-management',
  imports: [FormsModule, CommonModule],
  templateUrl: './mess-management.component.html',
  styleUrl: './mess-management.component.scss'
})
export class MessManagementComponent implements OnInit {


   http =inject(HttpClient)
   messData:any[]=[];

   ngOnInit(): void {
   this.getData()
   }

getData(){
  this.http.get("assets/userApi.json").subscribe((res:any)=>{
    this.messData =res.mess ;
    console.log(this.messData);

  })
}

  resgisterObj:any= {
      "id": "",
      "name": "",
      "status": "",
      "location": "",
      "students": "",
      "employees": "",
      "complaints": ""
    }
UpData: any ;

    createMess(){
      this.http.get("assets/userApi.json").subscribe((res:any)=>{
       this.UpData =res.createMess
          this.messData.unshift(this.resgisterObj)
          if(this.UpData.result){
            alert(this.UpData.message)
          }
       })
    }

onEdit(data:any){
 this.resgisterObj=data;
}

updateMess(){
 this.http.get("assets/userApi.json").subscribe((res:any)=>{
       this.UpData =res.UpdateMess
          this.messData.unshift(this.resgisterObj)
          if(this.UpData.result){
            alert(this.UpData.message)
          }
       })
}

deleteMess(id:any){
  const isdelet =confirm("Are you Sure Want to delete Emplyee")
  if (isdelet) {
     this.http.get("assets/userApi.json").subscribe((res:any)=>{
     if( res.DeleteMess.result){
      alert(res.DeleteMess.message)
     }
  })
  }


}


}
