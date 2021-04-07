import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FooterButtonsService } from '../footer-buttons.service';

@Component({
  selector: 'app-patient-references',
  templateUrl: './patient-references.component.html',
  styleUrls: ['./patient-references.component.scss'],
})
export class PatientReferencesComponent implements OnInit {
  constructor(private footerService: FooterButtonsService, private modalCtrl: ModalController) { }
  dismiss() {
    this.footerService.toggolPatientReferencesPopup();
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  ngOnInit() {}

}
