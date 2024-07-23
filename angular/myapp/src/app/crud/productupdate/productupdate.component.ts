import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseserviceService } from '../../shared/services/databaseservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrl: './productupdate.component.css'
})

export class ProductupdateComponent {

oldData:any;
  prodData: any;
  id: any;

  constructor(private actRouteObj: ActivatedRoute, private dbServ: DatabaseserviceService,private routerObj: Router) { }

  ngOnInit() {
   

    this.actRouteObj.paramMap.subscribe((para) => {
      this.id = para.get('id');
      console.log(this.id);
      this.dbServ.getSingleRecord("product", this.id).subscribe((res) => {
console.log(res);
        this.oldData = {...res};
        this.prodData = new FormGroup({
          pname: new FormControl(this.oldData.pname, [Validators.required, Validators.pattern("^[a-zA-Z ]{3,13}$")]),
          price: new FormControl(this.oldData.price, [Validators.required, Validators.pattern("^[0-9]{3,13}$")]),
          company: new FormControl(this.oldData.company, [Validators.required, Validators.pattern("^[a-zA-Z ]{3,13}$")]),
        })
      })
    })



  }
  addData() {
    this.dbServ.updateRecord("product",this.id,this.prodData.value).subscribe(()=>{
        window.alert("Record added succesfully");
        this.routerObj.navigate(['/mainDashboard/productdash']);
    })
  
    }
    
  }

