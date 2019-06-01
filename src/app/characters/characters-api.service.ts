import { Injectable } from "@angular/core";
import { ApiService } from "../shared/api/api.service";

@Injectable({
  providedIn: "root"
})
export class CharactersApiService {
  private url: string = "/general/characters";
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  getAll() {
    return this.apiService.get(this.url);
  }
}
