import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DatabaseserviceService } from '../../shared/services/databaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {

  prodData:any;

constructor(private dbserv:DatabaseserviceService,private routerObj:Router){}

  ngOnInit(){
    this.prodData = new FormGroup({
      pname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      price:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{3,20}$")]),
      company:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
    })
  }
  addData(){
    // console.log(this.prodData.value);
this.dbserv.addRecord("product",this.prodData.value).subscribe(()=>{
  window.alert("Record Added Successfully");
  this.routerObj.navigate([`/mainDashboard/productdash`]);
}

)}


}
