import { Injectable } from "@angular/core";
import { ApiService } from "../shared/api/api.service";

@Injectable({
  providedIn: "root"
})
export class HousesApiService {
  api: ApiService;
  url: string = "/show/houses";

  constructor(api: ApiService) {
    this.api = api;
  }

  getAll() {
    return this.api.get(this.url);
  }
}
