import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "cp-characters-list",
  templateUrl: "./characters-list.component.html",
  styleUrls: ["./characters-list.component.sass"]
})
export class CharactersListComponent implements OnInit {
  http;
  characters;
  loading;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.loading = true;

    this.http.get("https://api.got.show/api/general/characters").subscribe(
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
