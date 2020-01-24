import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form/form.component';
import { QouteComponent } from './qoutes/qoutes/qoutes.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details/qoute-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QouteComponent,
    QouteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
