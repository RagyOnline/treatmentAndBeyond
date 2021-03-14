import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientNailDoAvoidEngComponent } from './patient-nail-do-avoid-eng.component';

describe('PatientNailDoAvoidEngComponent', () => {
  let component: PatientNailDoAvoidEngComponent;
  let fixture: ComponentFixture<PatientNailDoAvoidEngComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNailDoAvoidEngComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientNailDoAvoidEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
