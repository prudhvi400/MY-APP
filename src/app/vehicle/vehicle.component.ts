import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any = [];
  term:string = "";
  column:string= "";
  order:string = "";
  page:number = 0;

  constructor(private _vehicleservice:VehicleService){

    _vehicleservice.getvehicle().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  search(){
    this._vehicleservice.getfilteredvehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
    },
    (err:any)=>{
      alert(err.error);
    }
    );
  }

  sort(){
    this._vehicleservice.getsortedvehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
    },
    (err:any)=>{
      alert(err.error);
    }
    );
  }

  pagination(){
    this._vehicleservice.getspagedvehicles(this.page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert(err.error);
      }
    );
  }
  delete(id:string){
    this._vehicleservice.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    );
  }


}
