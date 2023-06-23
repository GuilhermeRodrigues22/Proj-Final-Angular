import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alunos',
  templateUrl: './form-alunos.component.html',
  styleUrls: ['./form-alunos.component.css'],
})
export class FormAlunosComponente implements OnInit {
  formGroupAluno: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  courseOption: string[] = [
    'Desenvolvimento de Sistemas',
    'Design Gráfico',
    'Administração',
    'Logistica'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private AlunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroupAluno = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      rg: [''],
      email: ['', [Validators.required]],
      data: [''],
      telefone: [''],
      couse: [''],
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getAlunobyId(id);
  }
  getAlunobyId(id: number) {
    this.AlunosService.getAlunos(id).subscribe({
      next: (data) => {
        this.formGroupAluno.setValue(data);
        this.isEditing = true;
      },
    });
  }
  save() {
    this.submitted = true;
    if (this.formGroupAluno.valid) {
      if (this.isEditing) {
        this.AlunosService.update(this.formGroupAluno.value).subscribe({
          next: () => {
            this.router.navigate(['aluno']);
          },
        });
      } else {
        this.AlunosService.save(this.formGroupAluno.value).subscribe({
          next: () => {
            this.router.navigate(['aluno']);
          },
        });
      }
    }
  }
  cancel() {
    this.router.navigate(['aluno']);
  }

  get name(): any {
    return this.formGroupAluno.get("name");
  }
  get email(): any {
    return this.formGroupAluno.get("email");
  }
}
