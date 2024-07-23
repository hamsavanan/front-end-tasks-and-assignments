import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  myName:string = "Haran Aadhithya";
num1:number = 100;
num2:number = 200;

myData:any;

// imgPath:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny3SwAPrbFVve_VPGNcsXV3DNrQjIDMTB5w&s";

// imgName:string = "Gol D. Roger";
greeting(){
  window.alert("It's Pirate King Gol D. Roger");
}
}
