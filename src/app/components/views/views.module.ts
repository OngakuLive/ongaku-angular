import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from './home.component';
import {PreRegisterComponent} from './pre-register.component';
import {LoginComponent} from './login.component';
import {BrowserModule} from '@angular/platform-browser';
import {FeedComponent} from './feed/feed.component';

const MODULES = [
  BrowserModule
];

const COMPONENTS = [
  HomeComponent,
  PreRegisterComponent,
  LoginComponent,
  FeedComponent
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
