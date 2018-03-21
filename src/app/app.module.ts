import { NgModule } from '@angular/core';
import { RoutesModule } from './components/routes.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [RoutesModule, ComponentsModule, HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
