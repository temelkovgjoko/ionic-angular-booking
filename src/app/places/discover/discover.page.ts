import { Component, OnInit } from '@angular/core';

import { Place } from '../place.module';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private placesService: PlacesService) { }
  loadedPlaces: Place[];
  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

}
