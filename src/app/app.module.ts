import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersoonService } from './persoon.service';
import { PersoonDetailsComponent } from './persoon-details/persoon-details.component';
import { PersonenComponent } from './personen/personen.component';
import { KlantenComponent } from './klanten/klanten.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoonDetailsComponent,
    PersonenComponent,
    KlantenComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [PersoonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
