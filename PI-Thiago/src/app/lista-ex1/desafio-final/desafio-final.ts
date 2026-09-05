import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.css'
})
export class DesafioFinal {
  nome = '';
  curso = '';
  matricula = '';
  mensagem = '';

  matricular() {
    this.mensagem = `Aluno ${this.nome} matriculado no curso de ${this.curso}. Matrícula: ${this.matricula}`;
  }
}