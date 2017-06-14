import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import {RestaurantService} from '../../services/restaurant.service';
import {FilmService} from '../../services/films.service';
import {Album} from '../../models/Album';
import {Restaurant} from '../../models/Restaurant';
import {Film} from '../../models/Film';
import {AlbumTableComponent} from '../album-table/album-table.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  private newAlbum: Album;
  private newRestaurant: Restaurant;
  private newFilm: Film;
  private selectedOption: string;
  private selectedAction: string;
  constructor(private albumService: AlbumService,
              private restaurantService: RestaurantService,
              private filmService: FilmService
  ) { }

  ngOnInit() {
    this.newAlbum = new Album('none', 'none', 'none', 'none', 'none', 'none');
    this.newRestaurant = new Restaurant('none', 'none', 'none', 'none', 'none');
    this.newFilm = new Film('none', 'none', 'none', 'none', 'none');
    this.selectedOption = 'albums';
    this.selectedAction = 'create';
  }

  getOption(value: string) {
    this.selectedOption = value;
  }

  getAction(value: string) {
    this.selectedAction = value;
  }

  createNewClass(field: string, value: any) {
    switch (this.selectedOption) {
      case 'albums':
        this.newAlbum[field] = value;
        break;
      case 'films':
        this.newFilm[field] = value;
        break;
      case 'restaurants':
        this.newRestaurant[field] = value;
        break;
    }
  }

  submitData() {
    if (this.selectedAction === 'create') {
      switch (this.selectedOption) {
        case 'albums':
          if (this.newAlbum.checkFields()) {
            this.albumService.addItem(this.newAlbum);
          }
          break;
        case 'films':
          if (this.newFilm.checkFields()) {
            this.filmService.addItem(this.newFilm);
          }
          break;
        case 'restaurants':
          if (this.newRestaurant.checkFields()) {
            this.restaurantService.addItem(this.newRestaurant);
          }
          break;
      }
    } else if (this.selectedAction === 'update') {
        if (this.newAlbum.id !== 'none') {
          this.albumService.updateAlbum(this.newAlbum);
        }
    }
  }
}
