import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientSkinChooseEngComponent } from './patient-skin-choose-eng.component';

describe('PatientSkinChooseEngComponent', () => {
  let component: PatientSkinChooseEngComponent;
  let fixture: ComponentFixture<PatientSkinChooseEngComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSkinChooseEngComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientSkinChooseEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
