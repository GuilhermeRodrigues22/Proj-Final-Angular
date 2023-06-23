import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { FormAlunosComponent } from './form-alunos/form-alunos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path:'professor', component :ProfessoresComponent },
  { path:'aluno', component: AlunosComponent},
  {path: 'alunoDetails/:id', component: FormAlunosComponent},
  {path: 'createAluno', component: FormAlunosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
