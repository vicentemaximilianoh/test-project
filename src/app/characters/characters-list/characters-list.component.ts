import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CharactersApiService } from "../characters-api.service";

@Component({
  selector: "cp-characters-list",
  templateUrl: "./characters-list.component.html",
  styleUrls: ["./characters-list.component.sass"]
})
export class CharactersListComponent implements OnInit {
  api: CharactersApiService;
  characters;
  loading;

  constructor(api: CharactersApiService) {
    this.api = api;
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.loading = true;

    this.api.getAll().subscribe(
      response => {
        this.characters = response.show;
      },
      err => {
        console.log(err.statusText);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
