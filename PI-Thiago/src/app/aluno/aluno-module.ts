import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing-module';
import { CadAluno } from './cad-aluno/cad-aluno';

@NgModule({
  declarations: [CadAluno],
  imports: [CommonModule, AlunoRoutingModule],
})
export class AlunoModule {}
