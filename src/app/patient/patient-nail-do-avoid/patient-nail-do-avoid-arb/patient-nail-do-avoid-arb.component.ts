import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-nail-do-avoid-arb',
  templateUrl: './patient-nail-do-avoid-arb.component.html',
  styleUrls: ['./patient-nail-do-avoid-arb.component.scss'],
})
export class PatientNailDoAvoidArbComponent implements OnInit {
  page = {
    rtl: true,
    title: "العناية بالأظافر",
    toDoListData: [
      {
        imgURL: "/assets/img/nail-do-KeepYourNailsShort.png",
        caption: "بتقليم أظافرك بانتظام باستخدام مَبْرد الأظافر فهو أفضل من القصافة."
      },
      {
        imgURL: "/assets/img/nail-do-ApplyEmollients.png",
        caption: "وضع كريمات مرطبة على الأظافر والجلد المحيط."
      },
    ],
    toAvoidListData: [
      {
        imgURL: "/assets/img/nail-avoid-TightFittingShoes.png",
        caption: "الأحذية الضيقة."
      },
      {
        imgURL: "/assets/img/nail-avoid-SoakingHandsInWater.png",
        caption: "غمر الأيدي في الماء لمدة طويلة."
      },
      {
        imgURL: "/assets/img/nail-avoid-artificialNails.png",
        caption: "استخدام الأظافر الصناعية."
      },
      {
        imgURL: "/assets/img/nail-avoid-RemovingNailCuticle.png",
        caption: "إزالة الزوائد الجلدية في نهاية الأظافر."
      }
    ]
  };
  constructor() { }

  ngOnInit() {}

}
