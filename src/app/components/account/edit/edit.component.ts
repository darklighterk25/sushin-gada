import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../services/accounts/accounts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  loading: Boolean = true;
  account: Account;

  constructor( private _accountsService: AccountsService ) {
  }
  ngOnInit() {
    this._accountsService.getAccount().subscribe( ( account: Account ) => {
      this.account = account;
      this.loading = false;
    });
  }
}
