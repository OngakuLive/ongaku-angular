import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from './home.component';
import {PreRegisterComponent} from './pre-register.component';
import {LoginComponent} from './login.component';
import {BrowserModule} from '@angular/platform-browser';

const MODULES = [
  BrowserModule
];

const COMPONENTS = [
  HomeComponent,
  PreRegisterComponent,
  LoginComponent
];

@NgModule({
  imports: [].concat(
    [
      UiModule
    ],
    MODULES
  ),
  declarations: COMPONENTS,
  exports: [].concat(MODULES, COMPONENTS)
})
export class ViewsModule {
}
