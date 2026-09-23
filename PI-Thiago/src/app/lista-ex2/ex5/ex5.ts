import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  standalone: false,
  templateUrl: './ex5.html',
  styleUrl: './ex5.css'
})
export class Ex5 {

  nomes: string[] = [
    'Carlos',
    'Ana',
    'João',
    'Mariana',
    'Pedro'
  ];

}