import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  public userform:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)]),
    phone: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        pin: new FormControl()
    }),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('', [Validators.required]),
        expiry: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor(){
    this.userform.get('type')?.valueChanges.subscribe(
      (data:any)=>{

        if(data == 'dayscholor'){
          this.userform.addControl('busFee', new FormControl());
          this.userform.removeControl('hostelFee');
        }
        else{
          this.userform.addControl('hostelFee', new FormControl());
          this.userform.removeControl('busFee');
        }
      }
    )
  }

  submit(){
    this.userform.markAllAsTouched();
    console.log(this.userform)
  }
}
