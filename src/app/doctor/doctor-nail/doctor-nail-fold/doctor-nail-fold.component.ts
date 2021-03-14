import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-doctor-nail-fold',
  templateUrl: './doctor-nail-fold.component.html',
  styleUrls: ['./doctor-nail-fold.component.scss'],
})
export class DoctorNailFoldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.popOver').popover();
  }
}
