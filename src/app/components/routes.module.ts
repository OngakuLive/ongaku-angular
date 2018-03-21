import { RouterModule }           from '@angular/router';

import { HomeComponent }          from './views/home.component';
import {  PreRegisterComponent  } from './views/pre-register.component';

export const RoutesModule = RouterModule.forRoot([
  { path: '', component: PreRegisterComponent }
  ]
);
