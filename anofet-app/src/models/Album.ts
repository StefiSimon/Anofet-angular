import {Injectable} from "@angular/core";
/**
 * Created by simon.stefi on 4/11/17.
 */
@Injectable()
export class Album {

  id: any;
  name: string;
  duration: string;
  genre: string;
  artist: string;
  release: any;

  constructor(id, name, duration, genre, artist, release) {
    this.id = id;
    this.artist = artist;
    this.duration = duration;
    this.genre = genre;
    this.name = name;
    this.release = release;
  }
  checkFields(): boolean {
    if (this.id === 'none' ||
        this.duration === 'none' ||
        this.genre === 'none' ||
        this.release === 'none' ||
        this.name === 'none' ||
        this.artist === 'none')
      return false;
    return true;
  }

  getId(): any {
    return this.id;
  }

}
