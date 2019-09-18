import { Component, OnInit } from "@angular/core";
import { HousesApiService } from "../houses-api.service";

@Component({
  selector: "app-houses-list",
  templateUrl: "./houses-list.component.html",
  styleUrls: ["./houses-list.component.sass"]
})
export class HousesListComponent implements OnInit {
  api: HousesApiService;
  houses: Object[] = [];
  loading: boolean;
  displayedColumns: string[] = ["name", "words"];

  constructor(api: HousesApiService) {
    this.api = api;
  }

  ngOnInit() {
    this.getHouses();
  }

  private getHouses() {
    this.loading = true;
    this.api.getAll().subscribe(
      response => {
        debugger;
        this.houses = response;
      },
      err => {
        console.log(err);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
