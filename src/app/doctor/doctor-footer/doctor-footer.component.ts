import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-footer',
  templateUrl: './doctor-footer.component.html',
  styleUrls: ['./doctor-footer.component.scss'],
})
export class DoctorFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  back() {
    window.history.back();
  }
}
