import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/location';
import { LocationsService} from '../../services/locations/locations.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit {

  loading: Boolean = true;
  locations: Location[];

  constructor( private _restaurantsService: LocationsService ) {
  }
  ngOnInit() {
    this._restaurantsService.getRestaurants().subscribe( ( locations: Location[] ) => {
      this.locations = locations;
      this.loading = false;
    });
  }
}
