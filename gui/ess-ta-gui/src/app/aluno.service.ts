import { Injectable, Inject } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];

  create(aluno: Aluno): void {
     this.alunos.push(aluno);
  }

  update(aluno:Aluno): void {
    aluno = aluno.clone();
    for (let a of this.alunos) {
        if (a.cpf == aluno.cpf) {
           a.metas = aluno.metas;
        }
    }

    console.log(aluno)
  }

  getAlunos(): Aluno[] {
    var result: Aluno[] = [];
    for (let a of this.alunos) {
      result.push(a.clone());
    }
    return result;
  }
}