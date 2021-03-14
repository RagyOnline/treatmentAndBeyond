import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-skin-do-avoid-eng',
  templateUrl: './patient-skin-do-avoid-eng.component.html',
  styleUrls: ['./patient-skin-do-avoid-eng.component.scss'],
})
export class PatientSkinDoAvoidEngComponent implements OnInit {
  page = {
    rtl: false,
    title: "Skin",
    toDoListData: [
      {
        imgURL: "/assets/img/skin-do-addOilToPathtub.png",
        caption: "Add oil to your bathtub"
      },
      {
        imgURL: "/assets/img/skin-do-cleanTowel.png",
        caption: "Use dry and clean towel"
      },
      {
        imgURL: "/assets/img/skin-do-amountsOfMoisturizing.png",
        caption: "Often, apply liberal amounts of moisturizing creams containing dexapanthenol"
      },
      {
        imgURL: "/assets/img/skin-do-sunProtection.png",
        caption: "Always use sun-protection outdoors"
      },
      {
        imgURL: "/assets/img/skin-do-useGlycerin.png",
        caption: "Always use glycerin or other moisturizing soaps or bathing solutions"
      },
      {
        imgURL: "/assets/img/skin-do-useVitaminK.png",
        caption: "Use Vitamin K creams for face, chest and back"
      },
    ],
    toAvoidListData: [
      {
        imgURL: "/assets/img/skin-avoid-AlcoholOrDisinfectant.png",
        caption: "Alcohol or disinfectant wipes/gels/solutions and antimicrobial cleansing preparations unless advised by your doctor"
      },
      {
        imgURL: "/assets/img/skin-avoid-veryHotAndVeryColdBathes.png",
        caption: "Very hot and very cold bathes"
      },
      {
        imgURL: "/assets/img/skin-avoid-ContactWithIrritatingChemicals.png",
        caption: "Contact with irritating chemicals e.g. benzene, paints, ..."
      },
      {
        imgURL: "/assets/img/skin-avoid-DirectExposureToColdAir.png",
        caption: "Direct exposure to cold air current for prolonged times e.g. A.C."
      }
    ]
  };
  constructor() { }

  ngOnInit() {}

}
