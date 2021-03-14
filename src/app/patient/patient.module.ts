import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientPageRoutingModule } from './patient-routing.module';

import { PatientPage } from './patient.page';
import { PaitientHeaderComponent } from "./paitient-header/paitient-header.component";
import { PatientFooterComponent } from "./patient-footer/patient-footer.component";
import { PatientChooseArbComponent } from "./patient-choose/patient-choose-arb/patient-choose-arb.component";
import { PatientChooseEngComponent } from "./patient-choose/patient-choose-eng/patient-choose-eng.component";
import { PatientSkinChooseArbComponent } from "./patient-skin-choose/patient-skin-choose-arb/patient-skin-choose-arb.component";
import { PatientSkinChooseEngComponent } from "./patient-skin-choose/patient-skin-choose-eng/patient-skin-choose-eng.component";
import { PatientSkinDoAvoidEngComponent } from "./patient-skin-do-avoid/patient-skin-do-avoid-eng/patient-skin-do-avoid-eng.component";
import { PatientSkinDoAvoidArbComponent } from "./patient-skin-do-avoid/patient-skin-do-avoid-arb/patient-skin-do-avoid-arb.component";
import { PatientHairDoAvoidArbComponent } from "./patient-hair-do-avoid/patient-hair-do-avoid-arb/patient-hair-do-avoid-arb.component";
import { PatientHairDoAvoidEngComponent } from "./patient-hair-do-avoid/patient-hair-do-avoid-eng/patient-hair-do-avoid-eng.component";
import { PatientNailDoAvoidArbComponent } from "./patient-nail-do-avoid/patient-nail-do-avoid-arb/patient-nail-do-avoid-arb.component";
import { PatientNailDoAvoidEngComponent } from "./patient-nail-do-avoid/patient-nail-do-avoid-eng/patient-nail-do-avoid-eng.component";
import { PatientMucositisArbComponent } from "./patient-mucositis/patient-mucositis-arb/patient-mucositis-arb.component";
import { PatientMucositisEngComponent } from "./patient-mucositis/patient-mucositis-eng/patient-mucositis-eng.component";
import { PatientDermatitisArbComponent } from "./patient-dermatitis/patient-dermatitis-arb/patient-dermatitis-arb.component";
import { PatientDermatitisEngComponent } from "./patient-dermatitis/patient-dermatitis-eng/patient-dermatitis-eng.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientPageRoutingModule,

  ],
  declarations: [
    PatientPage,
    PaitientHeaderComponent,
    PatientFooterComponent,
    PatientChooseArbComponent,
    PatientChooseEngComponent,
    PatientSkinChooseArbComponent,
    PatientSkinChooseEngComponent,
    PatientSkinDoAvoidEngComponent,
    PatientSkinDoAvoidArbComponent,
    PatientHairDoAvoidArbComponent,
    PatientHairDoAvoidEngComponent,
    PatientNailDoAvoidArbComponent,
    PatientNailDoAvoidEngComponent,
    PatientMucositisArbComponent,
    PatientMucositisEngComponent,
    PatientDermatitisArbComponent,
    PatientDermatitisEngComponent,
  ]
})
export class PatientPageModule { }
