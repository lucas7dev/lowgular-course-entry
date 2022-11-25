import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeComponentModule} from "./ui/employee/employee.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeComponentModule,
    EmployeeServiceModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
