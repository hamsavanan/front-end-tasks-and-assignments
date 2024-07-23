import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {

 
  emp:any=[
    {id:1,name:"prasanth",salary:5600,post:"developer",address:"Chennai"},
    {id:2,name:"Vijay",salary:456778,post:"manager",address:"velachery"},
    {id:3,name:"Gokul",salary:6000,post:"tester",address:"Chennai"},
    {id:4,name:"Hamsa",salary:8000,post:"lead",address:"madurai"},
    {id:5,name:"Ajith",salary:12000,post:"developer",address:"tambaram"},
  ]

}
