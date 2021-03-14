import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientSkinDoAvoidArbComponent } from './patient-skin-do-avoid-arb.component';

describe('PatientSkinDoAvoidArbComponent', () => {
  let component: PatientSkinDoAvoidArbComponent;
  let fixture: ComponentFixture<PatientSkinDoAvoidArbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSkinDoAvoidArbComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientSkinDoAvoidArbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
