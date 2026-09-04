import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1 } from './ex1/ex1';

import { ListaEx1RoutingModule } from './lista-ex1-routing-module';

@NgModule({
  declarations: [Ex1],
  imports: [
    CommonModule,
    ListaEx1RoutingModule
  ]
})
export class ListaEx1Module {}