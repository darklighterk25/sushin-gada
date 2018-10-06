import { Component, OnInit } from '@angular/core';
import { faFile, faEdit, faHistory } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  fa_edit = faEdit;
  fa_file = faFile;
  fa_history = faHistory;
  selector: number;

  constructor() {
    this.selector = 0;
  }
  ngOnInit() {
  }
}
