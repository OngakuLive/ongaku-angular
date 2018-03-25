import {Component, OnInit, ViewChild} from '@angular/core';

import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login',
  template: `
    <div class="flex flex-row flex-full flex-right" 
         style="background-size:cover;background-image:url('/assets/images/loginbackground-dark.png')">
      <div class="flex flex-column" style="height: 100%;background: linear-gradient(to right, transparent , black);">
        <h3>ONGAKU</h3>
        <form (submit)="onSubmit()" [formGroup]="loginForm" class="flex flex-column">
          <input formControlName="login" placeholder="login" />
          <input #passwordField 
                 ngClass="{{loginFailed ? 'shake' : ''}}" 
                 type="password" 
                 formControlName="password" 
                 placeholder="password" />
          <button type="submit" class="btn">LOGIN</button>
        </form>
      </div>
    </div>`,
  styles: []
})
export class LoginComponent implements OnInit {
  @ViewChild('passwordField') passwordField: any;

  public loginForm: FormGroup;
  public loginFailed = false;
  constructor(private http: HttpService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.loginFailed = false;
    if (this.loginForm.valid) {
      this.http.POST('/auth/login', this.loginForm.getRawValue(), true, false).subscribe(
        res => {
          localStorage.setItem('token', res.data);
          this.router.navigate(['/feed']);
        },
        err => {
          this.loginFailed = true;
          this.loginForm.patchValue({ password: '' });
          this.passwordField.nativeElement.focus();
        }
      );
    }
  }
}
