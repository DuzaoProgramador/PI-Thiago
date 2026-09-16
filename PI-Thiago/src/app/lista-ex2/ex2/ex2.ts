import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: false,
  templateUrl: './ex2.html',
  styleUrl: './ex2.css'
})
export class Ex2 {

  usuarioLogado: boolean = false;

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

}