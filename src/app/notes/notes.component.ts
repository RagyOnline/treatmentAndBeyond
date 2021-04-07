import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FooterButtonsService } from '../footer-buttons.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  @Input() isArabic: boolean = false;
  constructor(private footerService: FooterButtonsService, private modalCtrl: ModalController) { }
  dismiss() {
    this.footerService.toggoleNotePopup(false);
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  ngOnInit() { }

}
