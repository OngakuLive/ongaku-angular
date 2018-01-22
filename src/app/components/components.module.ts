import { NgModule } from '@angular/core';
import { ViewsModule } from './views/views.module';

const MODULES = [
  ViewsModule
];

const PROVIDERS = [];

const COMPONENTS = [];

@NgModule({
  imports: MODULES,
  declarations: COMPONENTS,
  providers: PROVIDERS,
  exports: [].concat(MODULES, COMPONENTS)
})
export class ComponentsModule {
}
