import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private baseUrl: string = "https://api.got.show/api";
  private http;

  constructor(http: HttpClient) {
    this.http = http;
  }

  get(url) {
    return this.http.get(`${this.baseUrl}${url}`);
  }
}
