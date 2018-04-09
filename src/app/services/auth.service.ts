import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private JWT: JwtHelper) {
  }

  loggedIn() {
    return tokenNotExpired();
  }

  public user() {
    return this.decode()['user'];
  }

  private decode() {
    if (tokenNotExpired()) {
      const token = localStorage.getItem('token');
      return this.JWT.decodeToken(token);
    }

    return {};
  }
}
