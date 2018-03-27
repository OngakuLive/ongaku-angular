import {Component, OnInit, ViewChild} from '@angular/core';

import {HttpService} from '../../../services/http.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: `./navbar.component.html`,

})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpService, private router: Router, private auth: AuthService) { }

  ngOnInit() {

  }

}
