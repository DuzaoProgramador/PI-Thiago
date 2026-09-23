import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.css'
})
export class Ex10 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 120.00,
      quantidade: 5,
      promocao: true
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80.00,
      quantidade: 10,
      promocao: false
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 950.00,
      quantidade: 3,
      promocao: true
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 250.00,
      quantidade: 7,
      promocao: false
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 180.00,
      quantidade: 0,
      promocao: true
    }
  ];

  alternarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }

}