import {Component, EventEmitter, OnInit} from '@angular/core';
import {AlbumService} from '../../services/album.service';
import { Album } from '../../models/Album';;

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.css']
})

export class AlbumTableComponent implements OnInit {
  private albums: Album[];
  private selectedField: string;
  private contentExists: boolean;
  albumUpdated: EventEmitter<Album[]>;

  constructor(private albumService: AlbumService) {
    this.albumUpdated = new EventEmitter();
  }

  ngOnInit() {
    //this.getItems();
    this.selectedField = 'name';
    this.contentExists = true;
    this.albumService.getPage(1)
      .then((albums) => this.albums = albums);
  }

  getOption(value: string) {
    this.selectedField = value;
  }

  getItems() {
    this.albumService.getAlbums().then((albums) => {
      this.albums = albums;
      this.albumUpdated.emit(albums);
    });
  }

  searchItem(value: string) {
    this.albumService.filterAlbums(value, this.selectedField)
      .then((albums) => {
      if (albums.length === 0) {
        this.contentExists = false;
      } else {
        this.albums = albums;
        this.albumUpdated.emit(albums);
      }
    });
  }

  changeContent(albums: Album[]) {
    this.albums = albums;
    this.albumUpdated.emit(albums);
  }

}
