import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-skin-do-avoid-arb',
  templateUrl: './patient-skin-do-avoid-arb.component.html',
  styleUrls: ['./patient-skin-do-avoid-arb.component.scss'],
})
export class PatientSkinDoAvoidArbComponent implements OnInit {
  page = {
    rtl: true,
    title: "العناية بالجلد",
    toDoListData: [
      {
        imgURL: "/assets/img/skin-do-addOilToPathtub.png",
        caption: "زيوت ملطفة عند الإستحمام."
      },
      {
        imgURL: "/assets/img/skin-do-cleanTowel.png",
        caption: "منشفة نظيفة وجافة."
      },
      {
        imgURL: "/assets/img/skin-do-amountsOfMoisturizing.png",
        caption: "كمية وفيرة من الكريمات المرطبة التي تحتوي على ديكسابانثينول."
      },
      {
        imgURL: "/assets/img/skin-do-sunProtection.png",
        caption: "دائماً كريمات واقية من آشعة الشمس خارج المنزل."
      },
      {
        imgURL: "/assets/img/skin-do-useGlycerin.png",
        caption: "دائماً الجليسرين أو الكريمات المُرطبة."
      },
      {
        imgURL: "/assets/img/skin-do-useVitaminK.png",
        caption: "كريمات تحتوي على ڤيتامين ك للوجه، الصدر والظهر."
      },
    ],
    toAvoidListData: [
      {
        imgURL: "/assets/img/skin-avoid-AlcoholOrDisinfectant.png",
        caption: "الكريمات المرطبة التي تحتوي على كحوليات أو المنظفات التي تحتوي على مطهرات بدون علم الطبيب."
      },
      {
        imgURL: "/assets/img/skin-avoid-veryHotAndVeryColdBathes.png",
        caption: "الاستحمام بماء شديد البرودة أو شديد السخونة."
      },
      {
        imgURL: "/assets/img/skin-avoid-ContactWithIrritatingChemicals.png",
        caption: "التلامس مع المواد الكيماوية المثيرة مثل البنزين أو الدهانات."
      },
      {
        imgURL: "/assets/img/skin-avoid-DirectExposureToColdAir.png",
        caption: "التعرض المباشر للهواء البارد (مثل المكيفات) لمدة طويلة."
      }
    ]
  };
  constructor() { }

  ngOnInit() {}

}
