import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Se inyecta dbz service. Habilita en todo el componente del main page
  // toda la información que este siendo utilizada en el servicio.
  constructor(public dbzService: DbzService) {

  }
}
