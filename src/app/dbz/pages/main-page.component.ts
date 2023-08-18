import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Se inyecta dbz service. Habilita en todo el componente del main page
  // toda la información que este siendo utilizada en el servicio.
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  // Elimina un personaje por el id
  onDeleteCharacter(id:string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void {
    this.dbzService.addCharacter(character);
  }
}
