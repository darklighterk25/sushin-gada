import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from '../../../services/accounts/accounts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  account: Account;
  form: FormGroup;
  loading: Boolean = true;

  constructor( private _accountsService: AccountsService,
               private _router: Router) {  }
  ngOnInit() {
    this._accountsService.getAccount().subscribe( ( account: Account ) => {
      this.account = account;
      this.loading = false;
      this.form = new FormGroup({
        'email': new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
          ]
        ),
        'password': new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(8)
          ]
        ),
        'passwordVerification': new FormControl(),
      });
      // Verificación de contraseña.
      this.form.controls['passwordVerification'].setValidators([
        Validators.required,
        this.notEqual.bind( this.form )
      ]);
    });
  }
  delete(): void {
    this.loading = true;
    this._accountsService.delete().subscribe(
      () => {
        this._router.navigate(['/home']);
      },
      () => {
        this.loading = false;
      }
    );
  }
  notEqual(control: FormControl ): { [str: string]: boolean } {
    const form: any = this; // Cambio de contexto.
    if ( control.value !== form.controls['password'].value ) {
      return {
        notEqual: true
      };
    }
    return null;
  }
  update(): void {
    this.loading = true;
    this._accountsService.update({
      email: this.form.get('email').value(),
      password: this.form.get('password').value()
    }).subscribe(
      () => {
        this.loading = false;
      }
    );
  }
}
