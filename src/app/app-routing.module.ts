import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'on-push-strategy',
    loadChildren: () => import('./on-push-strategy/on-push-strategy.module').then(m => m.OnPushStrategyModule)
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: '',
    redirectTo: 'on-push-strategy',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
