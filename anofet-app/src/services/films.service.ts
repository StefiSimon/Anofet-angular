/**
 * Created by simon.stefi on 4/12/17.
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Film } from '../models/Film';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FilmService {

  private filmsUrl = 'http://localhost:5000/api/films';

  constructor (private http: Http) {}

  getFilms(): Promise<Film[]> {
    const headers = {'Access-Control-Allow-Origin' : '*'};
    const options = new RequestOptions(headers);
    return this.http.get(this.filmsUrl, options)
      .toPromise()
      .then(response => response.json());
  }

  addItem(film: Film) {
    console.log(film);
  }

}
