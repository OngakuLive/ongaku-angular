import {Component, OnInit, ViewChild} from '@angular/core';

import {HttpService} from '../../../services/http.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'profile-card',
  template: `
    <div class="card no-padding"
           style="width: 290px;">
        
        <img width="290px" height="100px"
             style="object-fit: cover"
             src="https://scontent.flhr2-2.fna.fbcdn.net/v/t31.0-8/1780139_421145624702470_3639461300571356571_o.jpg?_nc_cat=0&oh=1cd4c2da39611c564eb47607c8343475&oe=5B71F5C1"/>
        <div style="padding:10px">
          <h4 style="letter-spacing:normal;font-weight:bold;text-align:left;text-transform: none">{{auth.user()['name']}}</h4>
          <p>@{{auth.user()['username']}}</p>
        </div>


        <img height="80" src="https://pbs.twimg.com/profile_images/778208123731533825/xp0DrxUA_400x400.jpg" 
             style="top:5px;left:5px;position:absolute;border-radius:40px;overflow:hidden;border:3px solid black;">
      </div>
  `,

})
export class ProfileCardComponent implements OnInit {

  constructor(private http: HttpService, private router: Router, protected auth: AuthService) { }

  ngOnInit() {

  }

}
