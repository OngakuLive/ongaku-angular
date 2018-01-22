import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from './home.component';

const MODULES = [
];

const COMPONENTS = [
  HomeComponent
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
