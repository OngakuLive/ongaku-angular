import { RouterModule }           from '@angular/router';

import { HomeComponent }          from './views/home.component';
import {  PreRegisterComponent  } from './views/pre-register.component';
import {LoginComponent} from './views/login.component';

export const RoutesModule = RouterModule.forRoot([
  { path: '', component: PreRegisterComponent },
  { path: 'login', component: LoginComponent }
  ]
);
