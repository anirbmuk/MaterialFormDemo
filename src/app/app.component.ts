import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

class DemoFormStateMatcher implements ErrorStateMatcher {

  private errorCode: string;
  constructor(errorCode: string) {
    this.errorCode = errorCode;
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return (control.touched || control.dirty) && (control.invalid || form.hasError(this.errorCode));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  materialForm: FormGroup;

  readonly passwordStateMatcher = new DemoFormStateMatcher('passwordmismatch');
  readonly nameStateMatcher = new DemoFormStateMatcher('namematch');

  ngOnInit(): void {
    this.materialForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
      firstname: new FormControl(''),
      lastname: new FormControl('')
    }, [ this.checkPassword.bind(this), this.checkName.bind(this) ]);
  }

  private checkPassword(group: FormGroup): { [s: string]: boolean } {
    if (!!group.value.password && !!group.value.confirmpassword &&
        group.value.password !== group.value.confirmpassword) {
      return { passwordmismatch: true };
    }
    return null;
  }

  private checkName(group: FormGroup): { [s: string]: boolean } {
    if (!!group.value.firstname && !!group.value.lastname &&
        group.value.firstname === group.value.lastname) {
      return { namematch: true };
    }
    return null;
  }
}
