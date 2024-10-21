import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:any = [];
  column:string = "";
  order:string = "";

  constructor(private _studentService:StudentsService){
    _studentService.getstudents().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  sort(){
    this._studentService.getsortedstudents(this.column, this.order).subscribe(
      (data:any)=>{
        this.students=data;
      }
    )
  }


}
