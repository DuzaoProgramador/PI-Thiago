import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css'
})
export class Ex6 {

  listaInicial: string[] = [
    'Carlos',
    'Ana',
    'João',
    'Mariana',
    'Pedro'
  ];

  nomes: string[] = [...this.listaInicial];

  removerUltimo(): void {
    if (this.nomes.length > 0) {
      this.nomes.pop();
    }
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.listaInicial];
  }

}