import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastro } from './cadastro/cadastro';

@NgModule({
  declarations: [Cadastro],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
