import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { PreflipkartComponent } from './preflipkart/preflipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EmployeesComponent } from './employees/employees.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';
import { AuthenticationGuard } from './authentication.guard';
import { StudentsComponent } from './students/students.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { StudentFeeComponent } from './student-fee/student-fee.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:'home',  component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'databinding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'dice', component:DiceComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes', component:PipesComponent},
    {path:'tasks', component:TasksComponent},
    {path:'preflipkart',component:PreflipkartComponent},
    {path:'higher-order', component:HigherOrderComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'employees', component:EmployeesComponent},
    {path:'bankaccounts', component:BankaccountsComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
    {path:'create-bankaccounts', component:CreateBankaccountsComponent},
    {path:'students', component:StudentsComponent},
    {path:'createuser', component:CreateuserComponent},
    {path:'vehicle-details/:id', component:VehicledetailsComponent},
    {path:'student-fee', component:StudentFeeComponent}
  ]},

  {path:'',component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
