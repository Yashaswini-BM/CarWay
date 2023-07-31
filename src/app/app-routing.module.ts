import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcarComponent } from './newcar/newcar.component';
import { AvailComponent } from './avail/avail.component';
import { ApplicationComponent } from './application/application.component';
import { UploadComponent } from './upload/upload.component';
import { ViewloanComponent } from './viewloan/viewloan.component';
import { OwnedcarComponent } from './ownedcar/ownedcar.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmiComponent } from './emi/emi.component';
import { FinalComponent } from './final/final.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
      {path:"home", component: HomeComponent},
      {path:"newcar", component:NewcarComponent},
      {path:"avail", component:AvailComponent},
      {path:"application", component:ApplicationComponent},
      {path:"upload", component:UploadComponent},
      {path:"viewloan", component:ViewloanComponent},
      {path:"ownedcar", component:OwnedcarComponent},
      {path:"emi", component:EmiComponent},
      {path:"login", component:LoginComponent,
          children:[
            {path:"customer", component:CustomerComponent},
            {path:"employee", component:EmployeeComponent}
      ]},
      {path:"final", component:FinalComponent},
      {
        path:"", redirectTo: "/home", pathMatch: "full"
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
