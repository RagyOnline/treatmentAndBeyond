import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorHairHowToGradeComponent } from './doctor-hair-how-to-grade.component';

describe('DoctorHairHowToGradeComponent', () => {
  let component: DoctorHairHowToGradeComponent;
  let fixture: ComponentFixture<DoctorHairHowToGradeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorHairHowToGradeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorHairHowToGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
