import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/films.service';
import {Film} from '../../models/Film';

@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.css']
})
export class FilmTableComponent implements OnInit {
  private films: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.filmService.getFilms().then(films => this.films = films);
  }

}
