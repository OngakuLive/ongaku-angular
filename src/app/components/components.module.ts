import { NgModule } from '@angular/core';
import { ViewsModule } from './views/views.module';
import {HttpService} from '../services/http.service';
import {AuthenticatedGuard} from '../guards/authenticated.guard';

const MODULES = [
  ViewsModule
];

const PROVIDERS = [
  HttpService,
  AuthenticatedGuard
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
