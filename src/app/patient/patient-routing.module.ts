import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientPage } from './patient.page';
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

const routes: Routes = [
  {
    path: '',
    component: PatientPage
  },
  {
    path: 'patientChooseEng',
    component: PatientChooseEngComponent
  },
  {
    path: 'patientChooseArb',
    component: PatientChooseArbComponent
  },
  {
    path: 'patientSkinChooseArb',
    component: PatientSkinChooseArbComponent
  },
  {
    path: 'patientSkinChooseEng',
    component: PatientSkinChooseEngComponent
  },
  {
    path: 'PatientSkinDoAvoidEng',
    component: PatientSkinDoAvoidEngComponent
  },
  {
    path: 'PatientSkinDoAvoidArb',
    component: PatientSkinDoAvoidArbComponent
  },
  {
    path: 'PatientHairDoAvoidArb',
    component: PatientHairDoAvoidArbComponent
  },
  {
    path: 'PatientHairDoAvoidEng',
    component: PatientHairDoAvoidEngComponent
  },
  {
    path: 'PatientNailDoAvoidArb',
    component: PatientNailDoAvoidArbComponent
  },
  {
    path: 'PatientNailDoAvoidEng',
    component: PatientNailDoAvoidEngComponent
  },
  {
    path: 'PatientMucositisArb',
    component: PatientMucositisArbComponent
  },
  {
    path: 'PatientMucositisEng',
    component: PatientMucositisEngComponent
  },
  {
    path: 'PatientDermatitisArb',
    component: PatientDermatitisArbComponent
  },
  {
    path: 'PatientDermatitisEng',
    component: PatientDermatitisEngComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPageRoutingModule {}
