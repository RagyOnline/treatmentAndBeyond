import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorSkinGHowToGradeComponent } from './doctor-skin-ghow-to-grade.component';

describe('DoctorSkinGHowToGradeComponent', () => {
  let component: DoctorSkinGHowToGradeComponent;
  let fixture: ComponentFixture<DoctorSkinGHowToGradeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSkinGHowToGradeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorSkinGHowToGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
