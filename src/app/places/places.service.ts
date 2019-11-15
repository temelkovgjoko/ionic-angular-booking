import { Injectable } from '@angular/core';
import { take, map, tap, delay } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of NYC',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Paris Mansion',
      'In Paris',
      'https://i.ytimg.com/vi/NQv9Z-LZ618/hqdefault.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      'Foggy Palace',
      'Not your average city trip!',
      'https://live.staticflickr.com/4711/26100810738_0f74f58b9b_b.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    )
  ])

  get places() {
    return this._places.asObservable();
  }
  constructor(private authService: AuthService) { }



  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map(places => {
        return { ...places.find(p => p.id === id) }
      })
    );
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title, description,
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this._places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        this._places.next(places.concat(newPlace));
      })
    );
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        console.log(placeId, title, description)
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex]
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId);
        this._places.next(updatedPlaces);
      })
    );
  }
}
