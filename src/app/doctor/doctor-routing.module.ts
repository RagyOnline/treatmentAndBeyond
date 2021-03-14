import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorPage } from './doctor.page';
import { DoctorPreventionComponent } from "./doctor-prevention/doctor-prevention.component";
import { DoctorPrevention1Component } from "./doctor-prevention/doctor-prevention1/doctor-prevention1.component";
import { DoctorPrevention2Component } from "./doctor-prevention/doctor-prevention2/doctor-prevention2.component";
import { DoctorPrevention3Component } from "./doctor-prevention/doctor-prevention3/doctor-prevention3.component";
import { DoctorNailComponent } from "./doctor-nail/doctor-nail.component";
import { DoctorNailPlateComponent } from "./doctor-nail/doctor-nail-plate/doctor-nail-plate.component";
import { DoctorNailFoldComponent } from "./doctor-nail/doctor-nail-fold/doctor-nail-fold.component";
import { DoctorNailFingertipsComponent } from "./doctor-nail/doctor-nail-fingertips/doctor-nail-fingertips.component";
import { DoctorHairComponent } from "./doctor-hair/doctor-hair.component";
import { DoctorHairLossComponent } from "./doctor-hair/doctor-hair-loss/doctor-hair-loss.component";
import { DoctorHairGainComponent } from "./doctor-hair/doctor-hair-gain/doctor-hair-gain.component";
import { DoctorHairHowToGradeComponent } from "./doctor-hair/doctor-hair-how-to-grade/doctor-hair-how-to-grade.component";
import { DoctorSkinComponent } from "./doctor-skin/doctor-skin.component";
import { DoctorSkinG1Component } from "./doctor-skin/doctor-skin-g1/doctor-skin-g1.component";
import { DoctorSkinG2Component } from "./doctor-skin/doctor-skin-g2/doctor-skin-g2.component";
import { DoctorSkinG3Component } from "./doctor-skin/doctor-skin-g3/doctor-skin-g3.component";
import { DoctorSkinGHowToGradeComponent } from "./doctor-skin/doctor-skin-ghow-to-grade/doctor-skin-ghow-to-grade.component";

const routes: Routes = [
  {
    path: '',
    component: DoctorPage
  },
  {
    path: 'prevention',
    component: DoctorPreventionComponent
  },
  {
    path: 'prevention1',
    component: DoctorPrevention1Component
  },
  {
    path: 'prevention2',
    component: DoctorPrevention2Component
  },
  {
    path: 'prevention3',
    component: DoctorPrevention3Component
  },
  {
    path: 'nail',
    component: DoctorNailComponent
  },
  {
    path: 'nailPlate',
    component: DoctorNailPlateComponent
  },
  {
    path: 'nailFold',
    component: DoctorNailFoldComponent
  },
  {
    path: 'nailFingertips',
    component: DoctorNailFingertipsComponent
  },
  {
    path: 'hair',
    component: DoctorHairComponent
  },
  {
    path: 'hairLoss',
    component: DoctorHairLossComponent
  },
  {
    path: 'hairGain',
    component: DoctorHairGainComponent
  },
  {
    path: 'hairHowToGrade',
    component: DoctorHairHowToGradeComponent
  },
  {
    path: 'skin',
    component: DoctorSkinComponent
  },
  {
    path: 'skinG1',
    component: DoctorSkinG1Component
  },
  {
    path: 'skinG2',
    component: DoctorSkinG2Component
  },
  {
    path: 'skinG3',
    component: DoctorSkinG3Component
  },
  {
    path: 'skinHowToGrade',
    component: DoctorSkinGHowToGradeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPageRoutingModule {}
