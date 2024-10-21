import { Component } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-student-fee',
  templateUrl: './student-fee.component.html',
  styleUrls: ['./student-fee.component.css']
})
export class StudentFeeComponent {
  public studentform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    class: new FormControl(),
    fathername: new FormControl(),
    Email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressline: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    company: new FormGroup({
      companyname: new FormControl(),
      package: new FormControl(),
    }),
    type: new FormControl(),

    marks:new FormArray([])
  })

  get marksFormArray(){
    return this.studentform.get('marks') as FormArray;
  }

  addmarks(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(), 
        percentage: new FormControl(),
      })
    )
  }
  delete(i:number){
    this.marksFormArray.removeAt(i);
  }


    submit(){
    console.log(this.studentform)
  }

  constructor(){
    this.studentform.get('type')?.valueChanges.subscribe(
      (data:any)=>{

        if(data == 'dayscholor'){
          this.studentform.addControl('busFee', new FormControl());
          this.studentform.removeControl('hostelFee');
        }
        else{
          this.studentform.addControl('hostelFee', new FormControl());
          this.studentform.removeControl('busFee');
        }
      }
    )
  }




}
