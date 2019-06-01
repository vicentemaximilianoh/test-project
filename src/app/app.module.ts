import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CharactersModule } from "./characters/characters.module";
import { HousesModule } from "./houses/houses.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CharactersModule, HousesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
