import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.css'
})
export class Ex4 {

  nomeProduto: string = 'Teclado';
  quantidadeEstoque: number = 5;

  adicionarUnidade(): void {
    this.quantidadeEstoque++;
  }

  removerUnidade(): void {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }

}