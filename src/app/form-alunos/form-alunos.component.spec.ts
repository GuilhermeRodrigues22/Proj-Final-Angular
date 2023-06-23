import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlunosComponent } from './form-alunos.component';

describe('FormAlunosComponent', () => {
  let component: FormAlunosComponent;
  let fixture: ComponentFixture<FormAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
