import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/Restaurant';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  private restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) {

  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.restaurantService.getRestaurants().then(restaurants => this.restaurants = restaurants);
  }



}
