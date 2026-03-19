import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employe-management',
  imports: [FormsModule, CommonModule],
  templateUrl: './employe-management.component.html',
  styleUrl: './employe-management.component.scss'
})
export class EmployeManagementComponent implements OnInit {

http =inject(HttpClient)
mydata:any[]=[];
viewList:boolean= false

ngOnInit(): void {
  this.getData()
}

getData(){
  debugger
  this.http.get("assets/userApi.json").subscribe((res:any)=>{
    debugger
     this.mydata =res.employees;
     console.log(this.mydata);

  })
}


resgisterObj:any= {
      id: "",
      "name": "",
      "age": "",
      "image": "",
      "mess": "Mess A",
      "behaviour": "",
      "joiningDate": "",
      "present": ""
    }

    uData:any;
    createEmp(){
      this.http.get("assets/userApi.json").subscribe((res:any)=>{
      this.uData =res.createEmployee
      this.mydata.unshift(this.resgisterObj)
      console.log(this.uData);
      alert(this.uData.message)

      })
    }

onEdit(data:any){
this.resgisterObj=data
}

UpdateEmp(){
  this.http.get("assets/userApi.json").subscribe((res:any)=>{
     if( res.UpdateEmployee.result){
      alert(res.UpdateEmployee.message)
     }
  })

}

deletEmp(id:any){
  const isdelet =confirm("Are you Sure Want to delete Emplyee")
  if (isdelet) {
     this.http.get("assets/userApi.json").subscribe((res:any)=>{
     if( res.DeletEmployee.result){
      alert(res.DeletEmployee.message)
     }
  })
  }


}


}



