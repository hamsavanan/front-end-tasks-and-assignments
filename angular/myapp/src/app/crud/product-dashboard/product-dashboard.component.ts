import { Component } from '@angular/core';
import { DatabaseserviceService } from '../../shared/services/databaseservice.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css'
})
export class ProductDashboardComponent {

myproducts:any;

constructor(private dbserv:DatabaseserviceService){}

ngOnInit(){
 this.fetchData();
}

fetchData(){
  this.dbserv.getRecord("product").subscribe((res)=>{
    this.myproducts = res;
    console.log(res);
  })
}


deleteData(id:any){
if(window.confirm(`Are you sure you want to delete this record with id ${id}`)){
 this.dbserv.deleteRecord("product",id).subscribe(()=>{
window.alert("Record Deleted Successfully");
this.fetchData();

})
}
}

}
