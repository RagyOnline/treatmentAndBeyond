import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-hair-do-avoid-arb',
  templateUrl: './patient-hair-do-avoid-arb.component.html',
  styleUrls: ['./patient-hair-do-avoid-arb.component.scss'],
})
export class PatientHairDoAvoidArbComponent implements OnInit {
  page = {
    rtl: true,
    title: "العناية بالشعر",
    toDoListData: [
      {
        imgURL: "/assets/img/hair-do-AlwaysUseMoisturizingShampoos.png",
        caption: "استخدام شامبو يحتوي على البانثينول."
      },
      {
        imgURL: "/assets/img/hair-do-moisturizingHairProducts.png",
        caption: "استخدام مرطبات الشعر فوراً بعد استخدام الشامبو."
      },
      {
        imgURL: "/assets/img/hair-do-shaveBeard.png",
        caption: "تهذيب شعرك بانتظام."
      },
      {
        imgURL: "/assets/img/hair-do-emollientShavingCreams.png",
        caption: "استخدام كميات وفيرة من الكريمات المرطبة قبل الحلاقة."
      },
      {
        imgURL: "/assets/img/hair-do-standardShaving.png",
        caption: "استخدام أمواس حلاقة جيدة."
      },
      {
        imgURL: "/assets/img/hair-do-moisturizingCreamAfterShaving.png",
        caption: "وضع كريمات ملطفة بعد الحلاقة."
      },
    ],
    toAvoidListData: [
      {
        imgURL: "/assets/img/hair-avoid-Anti-dandruffShampoos.png",
        caption: "استخدام شامبو ضد القشرة ما لم ينصحك الطبيب بذلك."
      },
      {
        imgURL: "/assets/img/hair-avoid-DryingHairProducts.png",
        caption: "استخدام مجفف الشعر أو المنتجات التي تسبب جفاف الشعر."
      },
      {
        imgURL: "/assets/img/hair-avoid-beardGrowth.png",
        caption: "نمو شعر زائد بالذقن."
      },
      {
        imgURL: "/assets/img/hair-avoid-ElectricShaver.png",
        caption: "استخدام ماكينة الحلاقة الكهربائية."
      }
    ]
  };
  constructor() { }

  ngOnInit() {}

}
