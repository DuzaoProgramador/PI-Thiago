import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css'
})
export class Ex11 {
  produto = '';
  preco = 0;
  quantidade = 1;
  mensagem = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    this.mensagem = `${this.quantidade} unidade(s) de ${this.produto} adicionada(s) ao carrinho.`;
  }
}