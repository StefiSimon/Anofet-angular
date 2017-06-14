/**
 * Created by simon.stefi on 4/11/17.
 */
import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import { Album } from '../models/Album';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumService {

  private albumsUrl = 'http://localhost:5000/api/albums';
  private postUrl = 'http://localhost:5000/api/CRUD/CREATE/album';
  private updateUrl = 'http://localhost:5000/api/CRUD/UPDATE/album';

  constructor (private http: Http) {
  }

  getAlbums(): Promise<Album[]> {
    const headers = {'Access-Control-Allow-Origin' : '*'};
    const options = new RequestOptions(headers);
    return this.http.get(this.albumsUrl, options)
      .toPromise()
      .then(response => response.json());
  }

  addItem(album: Album): Promise<void> {
    console.log(album);
    return this.http.post(this.postUrl, { album })
      .toPromise()
      .then(response => console.log(response));
  }

  deleteItem(value: string): Promise<string> {
    return this.http.delete('http://localhost:5000/api/CRUD/DELETE/' + value)
      .toPromise()
      .then(response => response.toString());
  }

  filterAlbums(value: string, field: string): Promise<Album[]> {
    const headers = {'Access-Control-Allow-Origin' : '*'};
    const options = new RequestOptions(headers);
    console.log(field);
    return this.http.get('http://localhost:5000/api/albums/like/' + field + '/' + value, options)
      .toPromise()
      .then(response => response.json());
  }

  updateAlbum(album: Album): Promise<void> {
    console.log(album);
    return this.http.post(this.updateUrl, { album })
      .toPromise()
      .then(response => console.log(response));
  }

  getPage(index: number): Promise<Album[]> {
    return this.http.get('http://localhost:5000/api/albums/page/10/' + index)
      .toPromise()
      .then(response => response.json());
  }

}
