import { Component } from "@angular/core";


@Component({

  // Selector, cómo quiero llamar mi componente
  selector: 'app-counter',

  // Template URL, lo usamos para mostarrarlo en el DOM
  template: '<h1>Hola Counter</h1>',

})

export class CounterComponent {

}



// El app-counter, necesita ser parte del módulo: app.module.ts
