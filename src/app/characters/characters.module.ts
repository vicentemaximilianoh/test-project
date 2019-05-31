import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersListComponent } from "./characters-list/characters-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, CharactersRoutingModule, HttpClientModule]
})
export class CharactersModule {}
