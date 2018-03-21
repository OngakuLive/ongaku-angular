import { NgModule } from '@angular/core';
import { ViewsModule } from './views/views.module';
import {HttpService} from '../services/http.service';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth} from 'angular2-jwt';
import {Http} from '@angular/http';

const MODULES = [
  ViewsModule
];

const PROVIDERS = [
  HttpService,
  AuthHttp,
  provideAuth({
    headerName: 'Authorization',
    headerPrefix: 'bearer',
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
    noJwtError: true
  }),
  Http
];

const COMPONENTS = [];

@NgModule({
  imports: MODULES,
  declarations: COMPONENTS,
  providers: PROVIDERS,
  exports: [].concat(MODULES, COMPONENTS)
})
export class ComponentsModule {
}
