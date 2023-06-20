import {NgModule} from "@angular/core";
import {HeroComponent} from "./components/hero/hero.component";
import {ListComponent} from "./components/list/list.component";
import {NgForOf, NgIf} from "@angular/common";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    NgIf,
    NgForOf
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule {}
