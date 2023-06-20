import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>App Counter</h1>
    <h3>Counter: {{ counter }}</h3>

    <input type="button" value="+1" (click)="IncreaseBy(1)"/>
    <input type="button" value="Reset" (click)="Reset(10)"/>
    <input type="button" value="-1" (click)="DecreaseBy(1)"/>
  `
})
export class CounterComponent {
  constructor() {
  }

  public counter: number = 10;

  IncreaseBy(value: number): void {
    this.counter += value;
  }

  DecreaseBy(value: number): void {
    this.counter -= value;
  }

  Reset(value: number): void {
    this.counter = value;
  }
}

