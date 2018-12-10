import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../../services/accounts/accounts.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  disableBtn = true;
  form: FormGroup;

  constructor( private _accountsService: AccountsService ) {
    this.form = new FormGroup({
      'name': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\'\\t\\n\\v\\f\\r ' +
            '\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*')
        ]
      ),
      'lastName1': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\'\\t\\n\\v\\f\\r ' +
            '\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*')
        ]
      ),
      'lastName2': new FormControl(
        '',
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\'\\t\\n\\v\\f\\r ' +
          '\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*')
      ),
      'birthDate': new FormControl(
        '',
        Validators.required
      ),
      'gender': new FormControl(
        '',
        Validators.required
      ),
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
          // Validators.pattern('/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/'),
          Validators.minLength(8)
        ]
      ),
      'passwordVerification': new FormControl(),
      'address': new FormGroup({
        'street': new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\'\\t\\n\\v\\f\\r ' +
              '\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*')
          ]
        ),
        'number': new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('[0-9]*')
          ]
        ),
        'interiorNumber': new FormControl(
          '',
          Validators.pattern('[a-zA-Z0-9]*')
        ),
        'neighborhood': new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\'\\t\\n\\v\\f\\r ' +
              '\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*')
          ]
        ),
        'zipCode': new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(5)
          ]
        ),
        'phone': new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(10)
          ]
        )
      }),
      'agreement': new FormControl(
        false,
        [
          Validators.required,
          Validators.pattern('true')
        ]
      ),
    });
    // Verificación de contraseña.
    this.form.controls['passwordVerification'].setValidators([
      Validators.required,
      this.notEqual.bind( this.form )
    ]);
    // Habilita el botón cuando el formulario es válido.
    this.form.valueChanges.subscribe(
      () => {
        this.disableBtn = !this.form.valid;
      }
    );
  }

  ngOnInit() {
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

  signUp() {
    this._accountsService.signup( this.form.value ).subscribe(
      response => {
        console.log( response );
      }
    );
  }

}
