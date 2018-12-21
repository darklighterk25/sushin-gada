import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/location';
import { Schedule } from '../../interfaces/schedule';
import { LocationsService} from '../../services/locations/locations.service';

@Component({
  selector: 'app-restaurants',
  styles: [ 'agm-map { height: 720px; }'],
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit {

  currentDay: Date;
  loading: Boolean = true;
  locations: Location[];

  constructor( private _locationsService: LocationsService ) {
    this.currentDay = new Date();
  }
  ngOnInit() {
    this._locationsService.getLocations().subscribe(
      (locations: Location[] ) => {
        this.locations = locations;
        this.loading = false;
        for (let i = 0; i < this.locations.length; i++) {
          this.locations[i].opensToday = this.opensToday(i);
        }
      }
    );
  }
  opensToday( index: number ): boolean {
    let aux: Schedule;
    switch (this.currentDay.getDay()) {
      case 0:
        aux = this.getSchedule( this.locations[index].schedule, 'sun' );
        break;
      case 1:
        aux = this.getSchedule( this.locations[index].schedule, 'mon' );
        break;
      case 2:
        aux = this.getSchedule( this.locations[index].schedule, 'tue' );
        break;
      case 3:
        aux = this.getSchedule( this.locations[index].schedule, 'wed' );
        break;
      case 4:
        aux = this.getSchedule( this.locations[index].schedule, 'thu' );
        break;
      case 5:
        aux = this.getSchedule( this.locations[index].schedule, 'fri' );
        break;
      case 6:
        aux = this.getSchedule( this.locations[index].schedule, 'sat' );
        break;
    }
    if ( aux.start != null && aux.end != null ) {
      return true;
    }
    return false;
  }
  getSchedule( arr: Schedule[], str: string ): Schedule {
    for (let obj of arr) {
      if (obj.day === str) {
        return obj;
      }
    }
  }
}

enum Days {
  sun = 0,
  mon = 1,
  tue = 2,
  wed = 3,
  thu = 4,
  fri = 5,
  sat = 6
}
