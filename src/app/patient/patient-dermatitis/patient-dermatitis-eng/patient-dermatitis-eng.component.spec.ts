import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientDermatitisEngComponent } from './patient-dermatitis-eng.component';

describe('PatientDermatitisEngComponent', () => {
  let component: PatientDermatitisEngComponent;
  let fixture: ComponentFixture<PatientDermatitisEngComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDermatitisEngComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientDermatitisEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
