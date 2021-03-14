import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientNailDoAvoidArbComponent } from './patient-nail-do-avoid-arb.component';

describe('PatientNailDoAvoidArbComponent', () => {
  let component: PatientNailDoAvoidArbComponent;
  let fixture: ComponentFixture<PatientNailDoAvoidArbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNailDoAvoidArbComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientNailDoAvoidArbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
