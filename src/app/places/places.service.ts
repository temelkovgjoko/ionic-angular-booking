import { Injectable } from '@angular/core';
import { Place } from './place.module';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of NYC',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99),
    new Place(
      'p2',
      'Paris Mansion',
      'In Paris',
      'https://i.ytimg.com/vi/NQv9Z-LZ618/hqdefault.jpg',
      189.99),
    new Place(
      'p3',
      'Foggy Palace',
      'Not your average city trip!',
      'https://live.staticflickr.com/4711/26100810738_0f74f58b9b_b.jpg',
      99.99)
  ];

  constructor() { }

  get places() {
    return [...this._places]
  }

  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) }
  }
}
