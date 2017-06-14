import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../../services/album.service';
import {AlbumTableComponent} from '../album-table/album-table.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  getInput(page: number) {
    this.albumService.getPage(page)
      .then(albums => AlbumTableComponent.prototype.changeContent(albums));
  }
}
