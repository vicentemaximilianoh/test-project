// import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CharactersModule } from "./characters/characters.module";
import { HousesModule } from "./houses/houses.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    CharactersModule,
    HousesModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
