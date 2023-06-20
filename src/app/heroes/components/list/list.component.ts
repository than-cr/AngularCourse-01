import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  private _heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She-hulk', 'Thor'];
  private _deletedHero: string = '';
  constructor() {
  }

  get heroNames(): string[] {
    return this._heroNames;
  }

  set heroNames(value: string[]) {
    this._heroNames = value;
  }

  removeLastHero(): void {
    const deletedHero = this._heroNames.pop();
    this._deletedHero = (deletedHero != undefined) ? deletedHero : '';
  }

  get deletedHero(): string {
    return this._deletedHero;
  }

  set deletedHero(value: string) {
    this._deletedHero = value;
  }
}
