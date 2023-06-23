import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfessoresComponent } from './form-professores.component';

describe('FormProfessoresComponent', () => {
  let component: FormProfessoresComponent;
  let fixture: ComponentFixture<FormProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfessoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
