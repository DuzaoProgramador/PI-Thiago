import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () =>
      import('./livros/livros-module').then(m => m.LivrosModule)
  },
  {
    path: 'aluno',
    loadChildren: () =>
      import('./aluno/aluno-module').then(m => m.AlunoModule)
  },
  {
    path: 'lista-ex1',
    loadChildren: () =>
      import('./lista-ex1/lista-ex1-module').then(m => m.ListaEx1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}