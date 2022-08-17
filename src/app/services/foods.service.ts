import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  readonly API_PATH: string = 'https://api.punkapi.com/v2/beers/';
  constructor(private http: HttpClient) {}

  getBeers(maxPerPage?: string) {
    return this.http.get(`${this.API_PATH}`)
      .pipe(
        map((response => response))
      );
  }

}
