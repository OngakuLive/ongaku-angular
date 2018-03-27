import { RouterModule }           from '@angular/router';

import { HomeComponent }          from './views/home.component';
import { PreRegisterComponent  } from './views/pre-register.component';
import { LoginComponent } from './views/login.component';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import {FeedComponent} from './views/feed/feed.component';

export const RoutesModule = RouterModule.forRoot([
  { path: '', component: PreRegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feed', component: FeedComponent}
  ]
);
