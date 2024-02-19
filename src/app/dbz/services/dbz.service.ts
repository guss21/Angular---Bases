import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzServiceService {
  public characters: Character[] = [
    {
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
      name: 'Vegetta',
      power: 7500
    }
  ];

  addCharacter(character: Character):void {
    const newCharacter: Character = { ...character, id: uuid()};

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number):void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id:string) {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
