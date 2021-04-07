import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FooterButtonsService } from "../footer-buttons.service";

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent implements OnInit {
  constructor(private footerService: FooterButtonsService, private modalCtrl: ModalController) { }
  dismiss() {
    this.footerService.toggoleDisclaimerPopup();
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  ngOnInit() { }

}
