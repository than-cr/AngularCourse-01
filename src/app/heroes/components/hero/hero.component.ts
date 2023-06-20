import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  private _name: string = 'ironman';
  private _age: number = 45;

  constructor() {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get capitalizedName(): string {
    return this._name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this._name} - ${this._age}`
  }

  changeHero(value: string): void {
    this._name = value;
  }

  changeAge(value: number): void {
    this._age = value;
  }

  reset(): void {
    this._name = 'ironman';
    this._age = 45;
  }
}
