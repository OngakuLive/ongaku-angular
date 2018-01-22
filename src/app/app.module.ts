import { NgModule } from '@angular/core';
import { RoutesModule } from './components/routes.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [RoutesModule, ComponentsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
