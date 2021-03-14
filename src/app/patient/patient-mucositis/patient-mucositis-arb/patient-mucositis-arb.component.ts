import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-mucositis-arb',
  templateUrl: './patient-mucositis-arb.component.html',
  styleUrls: ['./patient-mucositis-arb.component.scss'],
})
export class PatientMucositisArbComponent implements OnInit {
  page = {
    rtl: true,
    title: "كيف تقلل من <span>إلتهاب الأغشية المخاطية </span>أثناء <span> العلاج الإشعاعي</span> للرأس والرقبة",
    toDoListData: [
      {
        imgURL: "/assets/img/mucositis-01-eng.png",
        caption: "ذَكِّر طبيب أسنانك دوما أنك تتلقى علاجًا إشعاعيا. “من الضروري أن يعلم”"
      },
      {
        imgURL: "/assets/img/mucositis-02-eng.png",
        caption: "أَجري فحصًا وإصلاحا لأسنانك لدى طبيب الأسنان قبل بدء جلسات العلاج الإشعاعي"
      },
      {
        imgURL: "/assets/img/mucositis-03-eng.png",
        caption: "نظِّف أسنانك بانتظام باستخدام فرشاة أسنان"
      },
      {
        imgURL: "/assets/img/mucositis-04-eng.png",
        caption: "اخلع ونَظِّف أسنانك الصناعية بعد كل وجبة"
      },
      {
        imgURL: "/assets/img/mucositis-05-eng.png",
        caption: "أشطف فمك 8 إلى 10 مرات في اليوم بمحلول بيكربونات 1.4%"
      },
      {
        imgURL: "/assets/img/mucositis-06-eng.png",
        caption: "يفضل أكل الحلوى المثلجة والآيس كريم (يفضل الطعام البارد والناعم وحبذا لو كان معتمدا على اللبن). تلك الأطعمة ترطب فمك وتجعل البلع سهلاً"
      },
      {
        imgURL: "/assets/img/mucositis-07-eng.png",
        caption: "اِبدأ وجبتك بملعقة من الكريمة أو الزيت أو الزبد أو المايونيز"
      },
      {
        imgURL: "/assets/img/mucositis-08-eng.png",
        caption: "يُفضل الوجبات الناعمة واللينة وأحيانا المفرومة"
      },
      {
        imgURL: "/assets/img/mucositis-09-eng.png",
        caption: "توقف عن شرب الكحوليات والتدخين. إنه أمر مهم"
      },
      {
        imgURL: "/assets/img/mucositis-010-eng.png",
        caption: "لا تستخدم خلة الأسنان"
      },
      {
        imgURL: "/assets/img/mucositis-011-eng.png",
        caption: "تجنب الطعام الحمضي أو الحار (كعصير الليمون، صلصة الخل والتوابل حارة)"
      },
      {
        imgURL: "/assets/img/mucositis-012-eng.png",
        caption: "زِنْ نفسك بانتظام لتكون متنبهًا لفقدان الوزن"
      },
      {
        imgURL: "/assets/img/mucositis-013-eng.png",
        caption: "احتفظ دائما بالماء قريبًا من يدك"
      },
      {
        imgURL: "/assets/img/mucositis-014-eng.png",
        caption: "شرب السوائل من خلال شفاطة سيكون أسهل"
      }
    ],
  };
  constructor() { }

  ngOnInit() {}

}
