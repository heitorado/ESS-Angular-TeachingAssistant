import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aluno: Aluno = {nome: "", cpf: "", email: "", git: ""};
  alunoService = new AlunoService();
  alunos: Aluno[] = [];


  create(alu: Aluno): void {
    this.alunoService.create(alu);
    this.alunos.push(alu)
    this.aluno = {nome: "", cpf: "", email: "", git: ""};
  }
}