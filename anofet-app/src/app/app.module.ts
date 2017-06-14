import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumTableComponent } from './album-table/album-table.component';
import { AlbumService } from '../services/album.service';
import { RestaurantTableComponent } from './restaurant-table/restaurant-table.component';
import { RestaurantService } from '../services/restaurant.service';
import { FilmTableComponent } from './film-table/film-table.component';
import { FilmService } from '../services/films.service';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumTableComponent,
    RestaurantTableComponent,
    FilmTableComponent,
    FormComponent,
    DeleteComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AlbumService,
    RestaurantService,
    FilmService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
