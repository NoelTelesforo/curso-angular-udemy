import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';




@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})

export class CounterModule {}













// Este módulo agrupa toda la funcionalidad que tiene counter, en este caso solo es el componente de counter.component.ts... Se declara en el decorador.

// Para poder utilizar el CounterComponent, con app.component.html por ejemplo se debe de exportar.
