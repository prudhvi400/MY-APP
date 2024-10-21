import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent {

  public vehicle:any = {};

  constructor(private _activatedRoute:ActivatedRoute, private _vehicleservice:VehicleService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        // api call with data id
        _vehicleservice.getvehicles(data.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )
      }
    )
  }

}
