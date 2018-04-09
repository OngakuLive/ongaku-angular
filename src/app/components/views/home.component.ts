import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
