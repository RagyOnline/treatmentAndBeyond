import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FooterButtonsService } from "../footer-buttons.service";

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnInit {
  constructor(private footerService: FooterButtonsService, private modalCtrl: ModalController) { }
  dismiss() {
    this.footerService.toggoleReferencesPopup();
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  ngOnInit() {}

}
