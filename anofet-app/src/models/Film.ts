import {Injectable} from "@angular/core";
/**
 * Created by simon.stefi on 4/12/17.
 */

@Injectable()
export class Film {
  id: any;
  name: string;
  duration: string;
  genre: string;
  language: string;


  constructor(id, name, duration, genre, language) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.genre = genre;
    this.language = language;
  }

  checkFields(): boolean {
    if (this.id === 'none' ||
      this.duration === 'none' ||
      this.genre === 'none' ||
      this.language === 'none' ||
      this.name === 'none')
      return false;
    return true;
  }
}
/**
 * Created by simon.stefi on 4/12/17.
 */
