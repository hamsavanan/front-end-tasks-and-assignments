import { Component } from '@angular/core';
import { DatabaseserviceService } from '../../shared/services/databaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  uid:any;
  upass:any;
  userData:any=[];
  constructor(private dbServ:DatabaseserviceService,private routerObj:Router){}

  signIn(){
   this.dbServ.getRecord("users").subscribe((res:any) =>{
    this.userData = res;
     let data = this.userData.filter((val:any)=>{
        return val.uname === this.uid && val.upass === this.upass
      });
      if(data.length > 0){
        sessionStorage.setItem("user",this.uid);
        this.routerObj.navigate(['mainDashboard']);
      }else{
        window.alert("Wrong Crendential Inserted");
        this.uid = "";
        this.upass = "";
      }
   })
  }


}