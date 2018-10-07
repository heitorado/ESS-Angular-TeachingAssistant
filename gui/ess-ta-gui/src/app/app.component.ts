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
  constructor(private alunoService: AlunoService) {}
  alunos: Aluno[] = [{nome: "ayla", cpf: "123", email: "a@blbla", git: "ayl"},
                      {nome: "Heitor", cpf: "31743287801", email: "hscs@cin.ufpe.br", git: "heitorado"}];


  create(alu: Aluno): void {
    this.alunoService.create(alu);
    this.alunos.push(alu)
    this.aluno = {nome: "", cpf: "", email: "", git: ""};
  }
}