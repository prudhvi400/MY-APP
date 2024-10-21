import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  name:string = "";
  names:string[] = [];

  submit(){
    this.names.push(this.name);
  }
  delete(){
    this.names.pop();
  }

studentname: string = "";
studentage: number = 0;

students:any = [];

create(){

  let student= {
    name: this.studentname,
    age: this.studentage
  }

  this.students.push(student)
}

}
