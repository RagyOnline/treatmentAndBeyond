import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dermatitis-eng',
  templateUrl: './patient-dermatitis-eng.component.html',
  styleUrls: ['./patient-dermatitis-eng.component.scss'],
})
export class PatientDermatitisEngComponent implements OnInit {
  page = {
    rtl: false,
    title: "HOW TO REDUCE RADIATION <span>DERMATITIS</span> DURING HEAD & NECK <span>RADIOTHERAPY</span>",
    toDoListData: [
      {
        imgURL: "/assets/img/dermatitis-01.png",
        caption: "Always wash your hands before touching the area being treated"
      },
      {
        imgURL: "/assets/img/dermatitis-02.png",
        caption: "Always use a clean towel"
      },
      {
        imgURL: "/assets/img/dermatitis-03.png",
        caption: "Let your skin dry naturally by air, whenever possible"
      },
      {
        imgURL: "/assets/img/dermatitis-04.png",
        caption: "Wash your body softly with water and neutral soap"
      },
      {
        imgURL: "/assets/img/dermatitis-05.png",
        caption: "Use an electric or hand razor. Always a clean, good quality razor"
      },
      {
        imgURL: "/assets/img/dermatitis-06.png",
        caption: "Use no perfume or aftershave. No irritating product on your skin"
      },
      {
        imgURL: "/assets/img/dermatitis-07.png",
        caption: "No friction to the  area treated"
      },
      {
        imgURL: "/assets/img/dermatitis-08.png",
        caption: "During shower, rinse off the soap with lukewarm water"
      },
      {
        imgURL: "/assets/img/dermatitis-09.png",
        caption: "No tight clothes or synthetic wear"
      },
      {
        imgURL: "/assets/img/dermatitis-010.png",
        caption: "Loose and soft clothes: silk or cotton are preferable"
      },
      {
        imgURL: "/assets/img/dermatitis-011.png",
        caption: "Apply the recommended cream and ointments"
      },
      {
        imgURL: "/assets/img/dermatitis-012.png",
        caption: "If you receive radiotherapy in the morning, put your cream on after the session and again in the evening.\n If you receive radiotherapy in the afternoon, put your cream on in the early morning and again after the session"
      },
      {
        imgURL: "/assets/img/dermatitis-013.png",
        caption: "Maintain regular physical activity. Walk on daily basis"
      },
      {
        imgURL: "/assets/img/dermatitis-014.png",
        caption: "Keep an eye on your skin on the treated area"
      },
      {
        imgURL: "/assets/img/dermatitis-015.png",
        caption: "Avoid sun exposure to your skin during the radiotherapy period and also during the year after the radiotherapy period"
      }
    ]
  };
  constructor() { }

  ngOnInit() {}

}
