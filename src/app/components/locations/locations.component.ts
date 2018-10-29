import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/location';
import { LocationsService} from '../../services/locations/locations.service';

@Component({
  selector: 'app-restaurants',
  styles: [ 'agm-map { height: 720px; }'],
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit {

  loading: Boolean = true;
  locations: Location[];

  constructor( private _locationsService: LocationsService ) {
  }
  ngOnInit() {
    this._locationsService.getLocations().subscribe( (locations: Location[] ) => {
      this.locations = locations;
      this.loading = false;
    });
  }
}
