import { Injectable } from '@angular/core';
import { Subject } from "rxjs"
export class NotePopupModel {
  isOpened: boolean;
  arabic: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class FooterButtonsService {
  DisclaimerPopup = new Subject<boolean>();
  Disclaimer: boolean = false;
  ReferencesPopup = new Subject<boolean>();
  References: boolean = false;
  NotePopup = new Subject<NotePopupModel>();
  Note: boolean = false;
  PatientReferencesPopup = new Subject<boolean>();
  PatientReferences: boolean = false;

  constructor() { }
  toggoleDisclaimerPopup() {
    this.Disclaimer = !this.Disclaimer;
    this.DisclaimerPopup.next(this.Disclaimer);
  }
  toggoleReferencesPopup() {
    this.References = !this.References;
    this.ReferencesPopup.next(this.References);
  }
  toggoleNotePopup(arabic: boolean) {
    this.Note = !this.Note;
    this.NotePopup.next({isOpened: this.Note, arabic: arabic});
  }
  toggolPatientReferencesPopup() {
    this.PatientReferences = !this.PatientReferences;
    this.PatientReferencesPopup.next(this.PatientReferences);
  }
}
