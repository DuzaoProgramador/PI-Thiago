import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.css'
})
export class Ex12 {

  nomeProduto: string = '';
  quantidadeProduto: number | null = null;
  mensagemErro: string = '';

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

  cadastrar(): void {
    this.mensagemErro = '';

    if (this.nomeProduto.trim() === '') {
      this.mensagemErro = 'Preencha o nome do produto.';
      return;
    }

    if (this.quantidadeProduto === null || this.quantidadeProduto < 0) {
      this.mensagemErro = 'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    const novoProduto: Produto = {
      id: this.produtos.length > 0
        ? Math.max(...this.produtos.map(produto => produto.id)) + 1
        : 1,
      nome: this.nomeProduto.trim(),
      quantidade: this.quantidadeProduto
    };

    this.produtos.push(novoProduto);

    this.nomeProduto = '';
    this.quantidadeProduto = null;
  }

  excluir(id: number): void {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }

}