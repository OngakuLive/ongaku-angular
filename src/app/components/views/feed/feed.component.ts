import {Component, ViewChild} from '@angular/core';

import {HttpService} from '../../../services/http.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'feed',
  template: `
    <nav-bar></nav-bar>
    <p>feedworks</p>
  `,
  styles: [``]
})
export class FeedComponent {
  constructor(private http: HttpService, private router: Router, private auth: AuthService) { }

}
