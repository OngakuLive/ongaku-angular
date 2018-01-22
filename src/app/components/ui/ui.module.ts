import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';

import { ClickOutsideModule } from 'ng-click-outside';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,

  ClickOutsideModule
];
const COMPONENTS = [
];

@NgModule({
  imports: MODULES,
  declarations: COMPONENTS,
  exports: [].concat(MODULES, COMPONENTS)
})
export class UiModule {
}
