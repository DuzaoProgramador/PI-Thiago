import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.css'
})
export class Ex13 {

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Desenvolver tela de login',
      responsavel: 'Carlos',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 2,
      titulo: 'Criar banco de dados',
      responsavel: 'Ana',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 3,
      titulo: 'Documentar projeto',
      responsavel: 'João',
      prioridade: 'baixa',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Testar funcionalidades',
      responsavel: 'Mariana',
      prioridade: 'média',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Corrigir erros do sistema',
      responsavel: 'Pedro',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Atualizar documentação',
      responsavel: 'Lucas',
      prioridade: 'baixa',
      concluida: true
    }
  ];

  alterarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  quantidadeConcluidas(): number {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  quantidadePendentes(): number {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }

}