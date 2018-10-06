import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../../interfaces/location';

@Component({
  selector: 'app-restaurant',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {

  @Input() location: Location;

  constructor() {
  }
  ngOnInit() {
  }
}
