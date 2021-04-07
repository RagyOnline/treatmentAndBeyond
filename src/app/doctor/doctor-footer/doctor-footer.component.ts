import { Component, OnInit } from '@angular/core';
import { FooterButtonsService } from "../../footer-buttons.service";

@Component({
  selector: 'app-doctor-footer',
  templateUrl: './doctor-footer.component.html',
  styleUrls: ['./doctor-footer.component.scss'],
})
export class DoctorFooterComponent implements OnInit {
  constructor(private footerService: FooterButtonsService) { }

  ngOnInit() {

  }
  openDisclaimerPopup() {
    this.footerService.toggoleDisclaimerPopup();
  }
  openReferencesPopup() {
    this.footerService.toggoleReferencesPopup();
  }
  back() {
    window.history.back();
  }
}
