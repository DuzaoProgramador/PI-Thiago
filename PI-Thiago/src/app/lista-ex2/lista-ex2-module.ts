import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';

import { ListaEx2RoutingModule } from './lista-ex2-routing-module';

@NgModule({
  declarations: [
    Ex1,
    Ex2
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListaEx2RoutingModule
  ]
})
export class ListaEx2Module {}