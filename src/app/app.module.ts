import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CharactersModule } from "./characters/characters.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CharactersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
