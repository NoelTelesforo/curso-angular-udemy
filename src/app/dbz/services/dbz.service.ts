import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
   // Arreglo de personajes
   characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  // Agrega un personaje al listado
  onNewCharacter(character: Character): void {

    const newCharacter: Character = {id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  // Elimina un personaje de la lista
  // onDeleteCharacter(index:number) {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id:string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }


}
