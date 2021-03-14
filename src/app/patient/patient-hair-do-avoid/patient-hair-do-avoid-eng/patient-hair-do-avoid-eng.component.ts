import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-hair-do-avoid-eng',
  templateUrl: './patient-hair-do-avoid-eng.component.html',
  styleUrls: ['./patient-hair-do-avoid-eng.component.scss'],
})
export class PatientHairDoAvoidEngComponent implements OnInit {
  page = {
    rtl: false,
    title: "Hair",
    toDoListData: [
      {
        imgURL: "/assets/img/hair-do-AlwaysUseMoisturizingShampoos.png",
        caption: "Always use moisturizing shampoos containing panthenol"
      },
      {
        imgURL: "/assets/img/hair-do-moisturizingHairProducts.png",
        caption: "Apply moisturizing hair products immediately after shampooing"
      },
      {
        imgURL: "/assets/img/hair-do-shaveBeard.png",
        caption: "Shave beard regularly"
      },
      {
        imgURL: "/assets/img/hair-do-emollientShavingCreams.png",
        caption: "Use liberal amounts of emollient shaving creams before shaving"
      },
      {
        imgURL: "/assets/img/hair-do-standardShaving.png",
        caption: "Use standard shaving razor"
      },
      {
        imgURL: "/assets/img/hair-do-moisturizingCreamAfterShaving.png",
        caption: "Put moisturizing cream after shaving"
      },
    ],
    toAvoidListData: [
      {
        imgURL: "/assets/img/hair-avoid-Anti-dandruffShampoos.png",
        caption: "Anti-dandruff shampoos unless advised by your doctor"
      },
      {
        imgURL: "/assets/img/hair-avoid-DryingHairProducts.png",
        caption: "Drying hair products and decrease use of hair dryers and hair dyes"
      },
      {
        imgURL: "/assets/img/hair-avoid-beardGrowth.png",
        caption: "Excessive beard growth"
      },
      {
        imgURL: "/assets/img/hair-avoid-ElectricShaver.png",
        caption: "Electric shaver"
      }
    ]
  };
  constructor() { }

  ngOnInit() {}

}
