import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {

useForm:any;

ngOnInit(){
  this.useForm = new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
    password:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9 ]{8,20}$")]),
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9]$")]),
    term:new FormControl("",Validators.requiredTrue)
  })
}
getData(){
  console.log(this.useForm.value);
}
}
