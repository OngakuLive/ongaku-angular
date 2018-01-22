import { RouterModule } from '@angular/router';

import { HomeComponent } from './views/home.component';

export const RoutesModule = RouterModule.forRoot([
  { path: '', component: HomeComponent }
  ]
);
