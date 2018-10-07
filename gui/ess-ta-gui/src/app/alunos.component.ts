import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AlunosComponent {
  constructor(private alunoService: AlunoService) {}

  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];


  create(alu: Aluno): void {
    this.alunoService.create(alu);
    this.alunos.push(alu)
    this.aluno = new Aluno();
  }

  update(aluno: Aluno): void {
    this.alunoService.update(aluno);
 }
}