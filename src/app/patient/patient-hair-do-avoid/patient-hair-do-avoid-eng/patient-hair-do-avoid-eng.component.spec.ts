import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientHairDoAvoidEngComponent } from './patient-hair-do-avoid-eng.component';

describe('PatientHairDoAvoidEngComponent', () => {
  let component: PatientHairDoAvoidEngComponent;
  let fixture: ComponentFixture<PatientHairDoAvoidEngComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientHairDoAvoidEngComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientHairDoAvoidEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
