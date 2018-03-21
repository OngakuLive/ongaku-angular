import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from './home.component';
import {PreRegisterComponent} from './pre-register.component';

const MODULES = [
];

const COMPONENTS = [
  HomeComponent,
  PreRegisterComponent
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
