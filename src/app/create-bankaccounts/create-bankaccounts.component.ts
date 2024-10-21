import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-create-bankaccounts',
  templateUrl: './create-bankaccounts.component.html',
  styleUrls: ['./create-bankaccounts.component.css']
})
export class CreateBankaccountsComponent {
  public bankaccountform : FormGroup = new FormGroup({
    account_name : new FormControl(),
    available_balance : new FormControl(),
    account_number : new FormControl(),
    city : new FormControl(),
    profie_picture : new FormControl()
  })

  constructor(private _bankaccountsService:BankaccountsService){}

  submit(){
    console.log(this.bankaccountform.value);
    this._bankaccountsService.createbankaccount(this.bankaccountform.value).subscribe(
      (data:any)=>{
        alert("successfully updated");
      },
      (err:any)=>{
        alert("err.error")
      }

    );

  }

}
