import { Component } from '@angular/core';

@Component({

   // Selector, cómo quiero llamar mi componente
  selector: 'app-counter',

  // Template URL, lo usamos para mostarrarlo en el DOM
  template: `

  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `

})

export class CounterComponent {
  constructor() { }

  counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

}


// El app-counter, necesita ser parte del módulo: app.module.ts
