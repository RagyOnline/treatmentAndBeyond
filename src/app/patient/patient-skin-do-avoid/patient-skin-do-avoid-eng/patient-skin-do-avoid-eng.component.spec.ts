import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientSkinDoAvoidEngComponent } from './patient-skin-do-avoid-eng.component';

describe('PatientSkinDoAvoidEngComponent', () => {
  let component: PatientSkinDoAvoidEngComponent;
  let fixture: ComponentFixture<PatientSkinDoAvoidEngComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSkinDoAvoidEngComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientSkinDoAvoidEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
