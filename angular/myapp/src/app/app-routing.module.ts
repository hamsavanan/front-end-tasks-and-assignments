import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UntypedFormArray } from '@angular/forms';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { BreakFastComponent } from './components/break-fast/break-fast.component';
import { ProductDashboardComponent } from './crud/product-dashboard/product-dashboard.component';
import { ProductaddComponent } from './crud/productadd/productadd.component';
import { ProductupdateComponent } from './crud/productupdate/productupdate.component';
import { AngularmaterialComponent } from './components/angularmaterial/angularmaterial.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './shared/Guards/auth.guard';


const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},

{path:"mainDashboard",component:MainDashboardComponent, canActivate:[authGuard], children:[
// 1.default routing
  // {path:"",component:DatabindingComponent},

 

  //  3.redirect routing
   {path:"",redirectTo:"databinding",pathMatch:"full"},

 // // 2.naming routing
  {path:"databinding",component:DatabindingComponent},
  {path:"directive",component:DirectiveComponent},

  {path:"breakfast",component:BreakFastComponent},
  {path:"productdash",component:ProductDashboardComponent},
  {path:"productadd",component:ProductaddComponent},
  {path:"productupdate/:id",component:ProductupdateComponent},
  {path:"angularmat",component:AngularmaterialComponent},


// 4.parameterize routing
{path:"empdetail",component:EmpDetailsComponent},
{path:"empdetail/:id",component:EmpDetailsComponent},

// 5. child routing
{path:"angForm",component:AngFormComponent,children:[
  {path:"",component:AngFormComponent},
  {path:"rtf",component:RtfComponent},
  {path:"utdf",component:UntypedFormArray},
]},

]},


  

  // 6.wildcard routing
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
