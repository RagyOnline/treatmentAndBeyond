import { Component, OnInit } from '@angular/core';
import { FooterButtonsService, NotePopupModel } from './footer-buttons.service';
import { ModalController } from '@ionic/angular';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ReferencesComponent } from "./references/references.component";
import { NotesComponent } from "./notes/notes.component";
import { PatientReferencesComponent } from "./patient-references/patient-references.component";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  DisclaimerPopup: boolean = false;
  ReferencesPopup: boolean = false;
  notePopup: boolean = false;
  patientReferencesPopup: boolean = false;
isArabic:boolean = false;


  constructor(private footerServes: FooterButtonsService, private modalController: ModalController) { }
  ngOnInit() {
    this.DisclaimerPopup = this.footerServes.Disclaimer;
    this.footerServes.DisclaimerPopup.subscribe(value => {
      this.DisclaimerPopup = value;
      if (this.DisclaimerPopup) {
        this.presentModal();
      }
    });
    this.ReferencesPopup = this.footerServes.References;
    this.footerServes.ReferencesPopup.subscribe(value => {
      this.ReferencesPopup = value;
      if (this.ReferencesPopup) {
        this.presentModal2();
      }
    });
    this.notePopup = this.footerServes.Note;
    this.footerServes.NotePopup.subscribe((value:NotePopupModel) => {
      this.notePopup = value.isOpened;
      this.isArabic = value.arabic;
      if (this.notePopup) {
        this.presentModal3();
      }
    });
    this.patientReferencesPopup = this.footerServes.PatientReferences;
    this.footerServes.PatientReferencesPopup.subscribe(value => {
      this.patientReferencesPopup = value;
      if (this.patientReferencesPopup) {
        this.presentModal4();
      }
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: DisclaimerComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async presentModal2() {
    const modal = await this.modalController.create({
      component: ReferencesComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async presentModal3() {
    const modal = await this.modalController.create({
      component: NotesComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'isArabic': this.isArabic,
      }
    });
    return await modal.present();
  }
  async presentModal4() {
    const modal = await this.modalController.create({
      component: PatientReferencesComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
