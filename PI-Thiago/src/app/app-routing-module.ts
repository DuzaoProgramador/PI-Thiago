import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadAluno } from './cad-aluno/cad-aluno';

const routes: Routes = [
  {
    path: '',
    component: CadAluno
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}