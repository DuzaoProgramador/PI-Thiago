import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';

import { ListaEx1RoutingModule } from './lista-ex1-routing-module';

@NgModule({
  declarations: [
    Ex1,
    Ex2,
    Ex3
  ],
  imports: [
    CommonModule,
    ListaEx1RoutingModule
  ]
})
export class ListaEx1Module {}