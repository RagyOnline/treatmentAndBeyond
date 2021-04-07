import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { ReferencesComponent } from "./references/references.component";
import { NotesComponent } from "./notes/notes.component";
import { PatientReferencesComponent } from "./patient-references/patient-references.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, DisclaimerComponent, ReferencesComponent, NotesComponent, PatientReferencesComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
