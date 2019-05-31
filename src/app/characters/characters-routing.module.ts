import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharactersListComponent } from "./characters-list/characters-list.component";

const routes: Routes = [
  {
    path: "characters",
    component: CharactersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {}
