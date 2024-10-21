import { Component } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent {
  bankaccounts:any = [];
  term:string = "";
  column:string = "";
  order: string = "";
  page:number=0;

    constructor(private _bankaccountsService:BankaccountsService){

      _bankaccountsService.getbankaccounts().subscribe(
        (data:any)=>{
          this.bankaccounts=data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }

    search(){
      this._bankaccountsService.getfilteredbankaccounts(this.term).subscribe(
        (data:any)=>{
          this.bankaccounts=data},
          (err:any)=>{
            alert(err.error);
          }
      );
    }
    change(){
      this._bankaccountsService.getsortedbankaccounts(this.column,this.order).subscribe(
        (data:any)=>{
          this.bankaccounts=data},
          (err:any)=>{
            alert(err.error);
          }
        );
      }
      pagination(){
        this._bankaccountsService.getspagedbankaccounts(this.page).subscribe(
          (data:any)=>{
            this.bankaccounts = data;
          },
          (err:any)=>{
            alert(err.error);
          }
        );
      }
    
      



}
