import { Component } from '@angular/core';
import { Character } from '../components/interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Arreglo de personajes
  characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 7500
  }
]

}
