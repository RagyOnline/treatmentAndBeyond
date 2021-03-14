import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientSkinChooseArbComponent } from './patient-skin-choose-arb.component';

describe('PatientSkinChooseArbComponent', () => {
  let component: PatientSkinChooseArbComponent;
  let fixture: ComponentFixture<PatientSkinChooseArbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSkinChooseArbComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientSkinChooseArbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
