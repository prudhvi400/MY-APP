import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  name:string = '';
  experience:number=0;
  package:number=0;
  role:string='';

  searchname:string = '';

  employees: any = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UI Developer' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UI Developer' }
];

submit(){
  let employer = {
    name : this.name,
    experience : this.experience,
    package : this.package,
    role : this.role
  }

  this.employees.push(employer);

}
delete(i:number){
  this.employees.splice(i,1)
}

hike(){
  this.employees = this.employees.map((employer:any) => {employer.package=employer.package+((employer.package*20)/100);
    return employer;
  });
}
bonus(){
  this.employees=this.employees.map((employer:any)=>{employer.package=employer.package+30000;
    return employer;
  })
}
search(){
  this.employees=this.employees.filter((employer:any)=> employer.name.includes(this.searchname))
}
packagelh(){
  this.employees=this.employees.sort((a:any,b:any)=>a.package-b.package)
}
packagehl(){
  this.employees=this.employees.sort((a:any,b:any)=>b.package-a.package)
}
experiencelh(){
  this.employees=this.employees.sort((a:any,b:any)=>a.experience-b.experience)
}
experiencehl(){
  this.employees=this.employees.sort((a:any,b:any)=>b.experience-a.experience)
}
expenditure(){
  var total = this.employees.reduce((sum:any,employer:any)=>sum+employer.package,0);
  alert('Total company expenditure:' +total);
}




}
