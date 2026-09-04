import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex1 } from './ex1/ex1';

const routes: Routes = [
  {
    path: '',
    component: Ex1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaEx1RoutingModule {}