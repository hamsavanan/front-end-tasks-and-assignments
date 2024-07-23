import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrl: './mypipe.component.css'
})
export class MypipeComponent {

msg:string="Hello friends, you all are fantastic participants.";

emp:any={
  id:411,
  name:"Viveka",
salary:90000
}

dateObj = new Date();

}
