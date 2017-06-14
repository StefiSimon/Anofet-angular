import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  private displayError: boolean;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.displayError = false;
  }

  deleteData(value: string) {
    this.albumService.deleteItem(value)
      .then((message) => {
        if (message.charAt(0) === 'E') {
          this.displayError = true;
        }
      });
  }

}
