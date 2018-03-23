import { NgModule } from '@angular/core';
import { ViewsModule } from './views/views.module';
import {HttpService} from '../services/http.service';

const MODULES = [
  ViewsModule
];

const PROVIDERS = [
  HttpService,
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
