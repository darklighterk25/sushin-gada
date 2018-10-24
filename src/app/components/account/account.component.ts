import { Component, OnInit } from '@angular/core';
import { faFile, faEdit, faHistory } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: [ './account.component.css' ]
})
export class AccountComponent implements OnInit {

  fa_edit = faEdit;
  fa_file = faFile;
  fa_history = faHistory;

  constructor() {
  }
  ngOnInit() {
  }
}
