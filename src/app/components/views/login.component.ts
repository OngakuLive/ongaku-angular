import { Component, OnInit } from '@angular/core';

import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  template: `
    <div class="flex flex-row flex-full flex-right" 
         style="background-size:cover;background-image:url('/assets/images/loginbackground-dark.png')">
      <div class="flex flex-column" style="margin: 1em;background: linear-gradient(to right, transparent , black);">
        <h3>ONGAKU</h3>
        <form (submit)="onSubmit()" formGroup="loginForm" class="flex flex-column">
          <input formControlName="login" placeholder="login" />
          <input formControlName="password" placeholder="password" />
          <a class="btn">LOGIN</a>
        </form>
      </div>
    </div>`,
  styles: []
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {

  }
}
