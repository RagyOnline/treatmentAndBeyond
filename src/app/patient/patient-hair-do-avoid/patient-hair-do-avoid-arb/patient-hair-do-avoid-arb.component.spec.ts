import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientHairDoAvoidArbComponent } from './patient-hair-do-avoid-arb.component';

describe('PatientHairDoAvoidArbComponent', () => {
  let component: PatientHairDoAvoidArbComponent;
  let fixture: ComponentFixture<PatientHairDoAvoidArbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientHairDoAvoidArbComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientHairDoAvoidArbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
