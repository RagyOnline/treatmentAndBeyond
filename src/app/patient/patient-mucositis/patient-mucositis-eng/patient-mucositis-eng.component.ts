import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-mucositis-eng',
  templateUrl: './patient-mucositis-eng.component.html',
  styleUrls: ['./patient-mucositis-eng.component.scss'],
})
export class PatientMucositisEngComponent implements OnInit {
  page = {
    rtl: false,
    title: "HOW TO REDUCE RADIATION <span>MUCOSITIS</span> DURING HEAD & NECK <span>RADIOTHERAPY</span>",
    toDoListData: [
      {
        imgURL: "/assets/img/mucositis-01-eng.png",
        caption: "Always remind your dentist that you have received radiotherapy. It is important for him/her to know"
      },
      {
        imgURL: "/assets/img/mucositis-02-eng.png",
        caption: "Before starting the radiation sessions, visit your dentist to have an oral check-up"
      },
      {
        imgURL: "/assets/img/mucositis-03-eng.png",
        caption: "Clean your teeth regularly with a toothbrush"
      },
      {
        imgURL: "/assets/img/mucositis-04-eng.png",
        caption: "After each meal, remove and clean your dental prothesis"
      },
      {
        imgURL: "/assets/img/mucositis-05-eng.png",
        caption: "Rinse your mouth 8 or 10 times per day with a solution of bicarbonate 1.4%"
      },
      {
        imgURL: "/assets/img/mucositis-06-eng.png",
        caption: "Eat sorbets and ice cream. Cold and smooth food based on milk are preferable. They moisturize your mouth and make it easier to swallow"
      },
      {
        imgURL: "/assets/img/mucositis-07-eng.png",
        caption: "Start your meal with a spoon of cream, oil, butter or mayonnaise"
      },
      {
        imgURL: "/assets/img/mucositis-08-eng.png",
        caption: "Smooth, creamy and sometimes blended meal are preferable"
      },
      {
        imgURL: "/assets/img/mucositis-09-eng.png",
        caption: "Stop smoking and drinking alcohol. It’s important"
      },
      {
        imgURL: "/assets/img/mucositis-010-eng.png",
        caption: "No tooth-picks"
      },
      {
        imgURL: "/assets/img/mucositis-011-eng.png",
        caption: "Avoid acidic and spicy foods. No lemon juice, no vinaigrette, no hot spices"
      },
      {
        imgURL: "/assets/img/mucositis-012-eng.png",
        caption: "Weigh yourself regularly. To be alert about weight loss"
      },
      {
        imgURL: "/assets/img/mucositis-013-eng.png",
        caption: "Always have a bottle of water close at hand"
      },
      {
        imgURL: "/assets/img/mucositis-014-eng.png",
        caption: "Drinking from a straw is easier"
      }
    ],
  };
  constructor() { }

  ngOnInit() {}

}
