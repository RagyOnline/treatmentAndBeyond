import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorNailFingertipsComponent } from './doctor-nail-fingertips.component';

describe('DoctorNailFingertipsComponent', () => {
  let component: DoctorNailFingertipsComponent;
  let fixture: ComponentFixture<DoctorNailFingertipsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorNailFingertipsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorNailFingertipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
