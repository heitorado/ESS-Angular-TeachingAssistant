import { Injectable, Inject } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];

  create(aluno: Aluno): void {
     this.alunos.push(aluno);
  }
}