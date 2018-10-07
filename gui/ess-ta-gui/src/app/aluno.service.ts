import { Aluno } from './aluno';

export class AlunoService {
  alunos: Aluno[] = [];
  
  create(aluno: Aluno): void {
     this.alunos.push(aluno);
  }
}