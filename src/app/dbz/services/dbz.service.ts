import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import {Character} from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  private _characters: Character[] = [
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
      name: 'Vegeta',
      power: 7500
    }
  ];

  get characters(): Character[] {
    return this._characters;
  }

  set characters(value: Character[]) {
    this._characters = value;
  }

  addCharacter(character : Character) : void {

    const newCharacter: Character = { id: uuid(), ... character };

    this._characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    this._characters = this._characters.filter(character => character.id !== id)
  }
}
