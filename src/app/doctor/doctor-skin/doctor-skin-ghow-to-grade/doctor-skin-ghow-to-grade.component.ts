import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-skin-ghow-to-grade',
  templateUrl: './doctor-skin-ghow-to-grade.component.html',
  styleUrls: ['./doctor-skin-ghow-to-grade.component.scss'],
})
export class DoctorSkinGHowToGradeComponent implements OnInit {
  papules: string;
  areas: string;
  constructor(private route: Router) { }

  ngOnInit() { }
  submit() {
    if (this.papules === "1") {
      if (this.areas === "1") {
        this.route.navigateByUrl('/doctor/skinG1');
      } else if (this.areas === "2") {
        this.route.navigateByUrl('/doctor/skinG2');
      } else if (this.areas === "3") {
        this.route.navigateByUrl('/doctor/skinG3');
      }
    } else if (this.papules === "2") {
      if (this.areas === "1") {
        this.route.navigateByUrl('/doctor/skinG2');
      } else if (this.areas === "2") {
        this.route.navigateByUrl('/doctor/skinG2');
      } else if (this.areas === "3") {
        this.route.navigateByUrl('/doctor/skinG3');
      }
    } else if (this.papules === "3") {
      if (this.areas === "1") {
        this.route.navigateByUrl('/doctor/skinG3');
      } else if (this.areas === "2") {
        this.route.navigateByUrl('/doctor/skinG3');
      } else if (this.areas === "3") {
        this.route.navigateByUrl('/doctor/skinG3');
      }
    }
  }
}
