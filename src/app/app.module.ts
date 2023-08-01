import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcarComponent } from './newcar/newcar.component';
import { OwnedcarComponent } from './ownedcar/ownedcar.component';
import { AvailComponent } from './avail/avail.component';
import { ApplicationComponent } from './application/application.component';
import { UploadComponent } from './upload/upload.component';
import { ViewloanComponent } from './viewloan/viewloan.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmiComponent } from './emi/emi.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FinalComponent } from './final/final.component';
import { NewcarBrandComponent } from './newcar-brand/newcar-brand.component';
import { NewAudiComponent } from './new-audi/new-audi.component';
import { NewBmwComponent } from './new-bmw/new-bmw.component';
import { NewFordComponent } from './new-ford/new-ford.component';
import { NewHyundaiComponent } from './new-hyundai/new-hyundai.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcarComponent,
    OwnedcarComponent,
    AvailComponent,
    ApplicationComponent,
    UploadComponent,
    ViewloanComponent,
    LoginComponent,
    CustomerComponent,
    EmployeeComponent,
    EmiComponent,
    HomeComponent,
    FinalComponent,
    NewcarBrandComponent,
    NewAudiComponent,
    NewBmwComponent,
    NewFordComponent,
    NewHyundaiComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
