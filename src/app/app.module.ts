import { NgModule } from '@angular/core';
import { RoutesModule } from './components/routes.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { CommonModule } from '@angular/common';
import {AuthService} from './services/auth.service';
import {AuthenticatedGuard} from './guards/authenticated.guard';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('token'))
  }), http, options);
}

@NgModule({
  imports: [CommonModule, RoutesModule, ComponentsModule, HttpModule, HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    })
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
