import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
   // Arreglo de personajes
   characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 7500
  }];

  // Agrega un personaje al listado
  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  // Elimina un personaje de la lista
  onDeleteCharacter(index:number) {
    this.characters.splice(index, 1);
  }


}
