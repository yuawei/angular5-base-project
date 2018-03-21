import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { ModalModule } from 'ngx-bootstrap';

// App is our top level component
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    CoreModule,
    DashboardModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  declarations: [
    AppComponent,
  ],
})
export class AppModule { }
