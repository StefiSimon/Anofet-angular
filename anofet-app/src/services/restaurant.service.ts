/**
 * Created by simon.stefi on 4/11/17.
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Restaurant } from '../models/Restaurant';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService {

  private restaurantsUrl = 'http://localhost:5000/api/restaurants';

  constructor (private http: Http) {}

  getRestaurants(): Promise<Restaurant[]> {
    const headers = {'Access-Control-Allow-Origin' : '*'};
    const options = new RequestOptions(headers);
    return this.http.get(this.restaurantsUrl, options)
      .toPromise()
      .then(response => response.json());
  }

  addItem(restaurant: Restaurant) {
    console.log(restaurant);
  }

}
/**
 * Created by simon.stefi on 4/12/17.
 */
