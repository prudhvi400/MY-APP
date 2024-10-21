import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  age:number = 30;
  name:string = 'sunny';
  phone:string = "+91";
  isInvalid:boolean = false;

  

  submit(){
    alert("submit clicked");
  }

  typing(){
    alert("typing");
  }

  typing1(){
    alert("type")
  }
  
}

