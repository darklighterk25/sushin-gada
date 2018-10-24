import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
      <router-outlet class="ml-5 mr-5"></router-outlet>
    <app-footer></app-footer>`
  })
export class AppComponent {

  constructor() { }
}
