import { Professor } from '../professor';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators}

@Component({
  selector: 'app-form-professores',
  templateUrl: './form-professores.component.html',
  styleUrls: ['./form-professores.component.css']
})
export class FormProfessoresComponent {
  courseOptions: string[] = ['Desenvolvimento de Sistemas',
  'Design Gráfico',
  'Administração',
  'Logistica'];

  @Input()
  professor: Professor = {} as Professor;

  @Output()
  saveEvent = new EventEmitter<Professor>();
  @Output()
  cleanEvent = new EventEmitter<void>();

  formGroupProfessor: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder
    ) {
      this.formGroupProfessor = FormBuilder.group({
        id:[''],
        name:['', [Validators.required]],
        rg: [''],
        email: ['',[Validators.required]],
        data: [''],
        telefone: [''],
        course: ['']
      });
    }
    ngOnChanges(changes: SimpleChanges): void {
      this.formGroupProfessor.setValue(this.professor);
    }

    save() {
      this.submitted = true;
      if(this.formGroupProfessor.valid) {
        this.saveEvent.emit(this.formGroupProfessor.value);
        this.formGroupProfessor.reset();
        this.submitted = false;
      }
    }
    limpar() {
      this.cleanEvent.emit();
      this.formGroupProfessor.reset();
      this.submitted = false;
    }
    get name(): any {
      return this.formGroupProfessor.get("name");
    }
    get email(): any {
      return this.formGroupProfessor.get("email");
    }
}
