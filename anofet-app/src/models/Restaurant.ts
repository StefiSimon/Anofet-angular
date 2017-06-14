import {Injectable} from "@angular/core";
/**
 * Created by simon.stefi on 4/12/17.
 */

@Injectable()
export class Restaurant {
  id: any;
  name: string;
  stars: any;
  address: string;
  theme: string;


  constructor(id, name, stars, address, theme) {
    this.id = id;
    this.name = name;
    this.stars = stars;
    this.address = address;
    this.theme = theme;
  }

  checkFields(): boolean {
    if (this.id === 'none' ||
      this.name === 'none' ||
      this.stars === 'none' ||
      this.address === 'none' ||
      this.theme === 'none')
      return false;
    return true;
  }
}
