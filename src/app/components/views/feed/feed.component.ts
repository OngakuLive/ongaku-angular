import {Component, OnInit, ViewChild} from '@angular/core';

import {HttpService} from '../../../services/http.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {Post} from '../../../interfaces/post.interface';

@Component({
  selector: 'feed',
  template: `
    <div class="container container-large flex flex-row">
      <profile-card></profile-card>
      <div class="flex-grow flex-self-start flex-column">
        <div *ngFor="let item of feedItems" 
             class="card">
          <p>item.</p>
        </div>
        <div *ngIf="error" class="card">
          <p>Sorry, we were unable to load the feed.</p>
        </div>
      </div>


    </div>
  `,
  styles: [``]
})
export class FeedComponent implements OnInit {
  public feedItems: [Post];
  public error = false;

  constructor(private http: HttpService, private router: Router, private auth: AuthService) {

  }

  ngOnInit(): void {
    this.http.GET('/timeline').subscribe(
      res => {
        this.feedItems = res.data;
      },
      err => {
        this.error = true;
      }
    );
  }


}
