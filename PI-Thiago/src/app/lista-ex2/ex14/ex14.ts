import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.css'
})
export class Ex14 {

  usuarioLogado: boolean = false;

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      quantidade: 10
    },
    {
      id: 3,
      nome: 'Monitor',
      quantidade: 3
    }
  ];

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

  excluirProduto(id: number): void {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }

}