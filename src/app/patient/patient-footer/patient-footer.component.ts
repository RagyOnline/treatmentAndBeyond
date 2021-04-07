import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FooterButtonsService } from 'src/app/footer-buttons.service';

@Component({
  selector: 'app-patient-footer',
  templateUrl: './patient-footer.component.html',
  styleUrls: ['./patient-footer.component.scss'],
})
export class PatientFooterComponent implements OnInit, OnDestroy {
  activatedPage: string = "";
  PatientNote: boolean = false;
  isArabic: boolean = false;
  PatientReferences: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private activatedRoute: ActivatedRoute, private footerService: FooterButtonsService) {
    this.subscription.add(this.activatedRoute.url.subscribe((value: any) => {
      if (value && value[0]) {
        this.activatedPage = value[0].path;
        //console.log("jjj", this.activatedPage);
        if (this.activatedPage.includes('patientChoose') ||
          this.activatedPage.includes('patientSkinChoose')) {
          this.PatientNote = false;
        }
        else if (this.activatedPage.includes('PatientMucositis') ||
          this.activatedPage.includes('PatientDermatitis')) {
          this.PatientNote = false;
          this.PatientReferences = true;
        }
        else {
          this.PatientNote = true;
          if (this.activatedPage.includes('Arb')) {
            this.isArabic = true;
          }
          this.PatientReferences = false;
        }
      }
    }));
  }
  openNotePopup() {
    this.footerService.toggoleNotePopup(this.isArabic);
  }
  openPatientReferencesPopup() {
    this.footerService.toggolPatientReferencesPopup();
  }
  ngOnInit() { }
  back() {
    window.history.back();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
