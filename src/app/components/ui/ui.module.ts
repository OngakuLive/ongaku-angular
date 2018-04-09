import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';

import { ClickOutsideModule } from 'ng-click-outside';
import {NavbarComponent} from './navbar/navbar.component';
import {ProfileCardComponent} from './feed/profile-card.component';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,

  ClickOutsideModule
];
const COMPONENTS = [
  NavbarComponent,
  ProfileCardComponent
];

@NgModule({
  imports: MODULES,
  declarations: COMPONENTS,
  exports: [].concat(MODULES, COMPONENTS)
})
export class UiModule {
}
