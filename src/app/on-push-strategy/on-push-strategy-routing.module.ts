import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnPushStrategyComponent} from './on-push-strategy.component';

const routes: Routes = [
  {
    path: '',
    component: OnPushStrategyComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OnPushStrategyRoutingModule { }
