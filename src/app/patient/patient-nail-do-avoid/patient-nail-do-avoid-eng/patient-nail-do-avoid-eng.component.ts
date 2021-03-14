import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-nail-do-avoid-eng',
  templateUrl: './patient-nail-do-avoid-eng.component.html',
  styleUrls: ['./patient-nail-do-avoid-eng.component.scss'],
})
export class PatientNailDoAvoidEngComponent implements OnInit {
  page = {
    rtl: false,
    title: "Nail",
    toDoListData: [
      {
        imgURL: "/assets/img/nail-do-KeepYourNailsShort.png",
        caption: "Keep your nails short and use nail files rather than nail clipperst"
      },
      {
        imgURL: "/assets/img/nail-do-ApplyEmollients.png",
        caption: "Apply emollients and moisturizers to your nails and surrounding skin"
      },
    ],
    toAvoidListData: [
      {
        imgURL: "/assets/img/nail-avoid-TightFittingShoes.png",
        caption: "Tight fitting shoes"
      },
      {
        imgURL: "/assets/img/nail-avoid-SoakingHandsInWater.png",
        caption: "Soaking hands in water for long periods of time"
      },
      {
        imgURL: "/assets/img/nail-avoid-artificialNails.png",
        caption: "The use of artificial nails"
      },
      {
        imgURL: "/assets/img/nail-avoid-RemovingNailCuticle.png",
        caption: "Removing nail cuticle “skin at root of nail”"
      }
    ]
  };
  constructor() { }

  ngOnInit() { }

}
