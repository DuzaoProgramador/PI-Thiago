import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-ex1',
    pathMatch: 'full'
  },
  {
    path: 'lista-ex1',
    loadChildren: () =>
      import('./lista-ex1/lista-ex1-module')
        .then(m => m.ListaEx1Module)
  },
  {
    path: 'lista-ex2',
    loadChildren: () =>
      import('./lista-ex2/lista-ex2-module')
        .then(m => m.ListaEx2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}