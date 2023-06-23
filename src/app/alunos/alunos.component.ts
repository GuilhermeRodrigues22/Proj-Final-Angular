import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [];
  constructor(private AlunosService: AlunosService,
    private router: Router) {

    }
    ngOnInit(): void {
      this.loadAlunos();
    }

    loadAlunos() {
      this.AlunosService.getAluno().subscribe({
        next: data => this.alunos = data
      });
    }
    create() {
      this.router.navigate(['createAluno']);
    }
    edit(aluno: Aluno) {
      this.router.navigate(['alunoDetails', aluno.id]);
    }
    delete(aluno: Aluno) {
      this.AlunosService.delete(aluno).subscribe(
        {
          next: () => this.loadAlunos()
        }
      );
    }
}
