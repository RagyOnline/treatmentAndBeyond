import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dermatitis-arb',
  templateUrl: './patient-dermatitis-arb.component.html',
  styleUrls: ['./patient-dermatitis-arb.component.scss'],
})
export class PatientDermatitisArbComponent implements OnInit {
  page = {
    rtl: true,
    title: "كيف تقلل من <span>إلتهاب الجلد </span> أثناء <span>العلاج الإشعاعي </span>للرأس والرقبة",
    toDoListData: [
      {
        imgURL: "/assets/img/dermatitis-01.png",
        caption: "إغسل يديك دومًا قبل لمس المنطقة التي تُعَالَج"
      },
      {
        imgURL: "/assets/img/dermatitis-02.png",
        caption: "استخدم دائمًا مِنشفة نظيفة"
      },
      {
        imgURL: "/assets/img/dermatitis-03.png",
        caption: "أترك بشرتك تجف بالهواء بشكل طبيعي كلما أمكن"
      },
      {
        imgURL: "/assets/img/dermatitis-04.png",
        caption: "إغسل جسمك بلطف بالماء والصابون المتعادل"
      },
      {
        imgURL: "/assets/img/dermatitis-05.png",
        caption: "استخدم شفرة حلاقة نظيفة وعالية الجودة كهربية أو يدوية."
      },
      {
        imgURL: "/assets/img/dermatitis-06.png",
        caption: "لا تستخدم أي عطور أو مستحضرات ما بعد الحلاقة. لا تستخدم منتجات مهيجة لبشرتك"
      },
      {
        imgURL: "/assets/img/dermatitis-07.png",
        caption: "إحرص على عدم الإحتكاك بالمنطقة التي تعالج"
      },
      {
        imgURL: "/assets/img/dermatitis-08.png",
        caption: "أثناء الاستحمام، أشطف الصابون دومًا بماء فاتر"
      },
      {
        imgURL: "/assets/img/dermatitis-09.png",
        caption: "لا ترتدي الملابس ضيقة أو أردية من ألياف صناعية"
      },
      {
        imgURL: "/assets/img/dermatitis-010.png",
        caption: "يفضل الملابس الفضفاضة الناعمة الحريرية أو القطنية"
      },
      {
        imgURL: "/assets/img/dermatitis-011.png",
        caption: "ضع الكريمات والمراهم الموصى بها"
      },
      {
        imgURL: "/assets/img/dermatitis-012.png",
        caption: "إذا كنت تتلقى علاجًا إشعاعيًّا في الصباح، ضع الكريم بعد الجلسة ومرة أخرى في المساء.\n إذا كنت تتلقى علاجًا إشعاعيًّا بعد الظهر، ضع الكريم في الصباح الباكر ومرة أخرى بعد الجلسة"
      },
      {
        imgURL: "/assets/img/dermatitis-013.png",
        caption: "حافظ على النشاط البدني المنتظم. امشي بصفة يومية"
      },
      {
        imgURL: "/assets/img/dermatitis-014.png",
        caption: "راقب جلدك في المناطق التي تُعالَج"
      },
      {
        imgURL: "/assets/img/dermatitis-015.png",
        caption: "تجنب تعرض جلدك للشمس أثناء فترة العلاج الإشعاعي وأيضًا لمدة عام بعد فترة العلاج الإشعاعي"
      }
    ]
  };
  constructor() { }

  ngOnInit() {}

}
