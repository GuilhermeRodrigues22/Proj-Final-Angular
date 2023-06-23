import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { FormAlunosComponent } from './form-alunos/form-alunos.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';
import { FormProfessoresComponent } from './form-professores/form-professores.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    FormAlunosComponent,
    HeaderComponent,
    HomeComponent,
    ProfessoresComponent,
    FormProfessoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
