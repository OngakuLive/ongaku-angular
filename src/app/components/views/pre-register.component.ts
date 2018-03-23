import { Component, OnInit } from '@angular/core';

import {HttpService} from '../../services/http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'pre-register',
  template: `
    <div class="flex flex-column flex-full">
      <h3>ongaku</h3>
      <form *ngIf="!hasPreregistered" 
            (submit)="onSubmit()" 
            [formGroup]="preregistration" 
            class="flex flex-column">
        <input formControlName="name" placeholder="name" />
        <input formControlName="email" placeholder="email" />
        <input formControlName="username" placeholder="username" />
        <button class="btn">pre-register</button>
      </form>
      <div *ngIf="hasPreregistered">
        <p>Thank you for pre-registering.</p>
      </div>
      <div *ngIf="preregistration.touched && preregistration.dirty && !preregistration.valid && submitAttempted" 
           style="position: absolute;right:0;bottom:0; margin: 10px;">
        <p>invalid data</p>
      </div>
    </div>
  `,
  styles: []
})
export class PreRegisterComponent implements OnInit {
  public hasPreregistered = false;
  public preregistration: FormGroup;
  public submitAttempted = false;
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.preregistration = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit() {
    this.submitAttempted = true;
    if (this.preregistration.valid) {
      this.http.POST('/auth/pre-register',
        this.preregistration.getRawValue(), true, false).subscribe(
          res => {
            this.hasPreregistered = true;
            console.warn('success');
          },
          err => {
            // todo: error service
            console.warn(err);
          },
        () => {
            console.warn('after');
          }
      );
    } else {
      console.warn('invalid');
    }
  }
}
