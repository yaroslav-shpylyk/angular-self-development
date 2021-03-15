import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnPushStrategyComponent } from './on-push-strategy.component';
import { ObjectManipulationsComponent } from './components/object-manipulations/object-manipulations.component';
import { OnPushStrategyRoutingModule } from './on-push-strategy-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ObservableManipulationsComponent } from './components/observable-manipulations/observable-manipulations.component';

@NgModule({
  declarations: [OnPushStrategyComponent, ObjectManipulationsComponent, ObservableManipulationsComponent],
  imports: [
    CommonModule,
    OnPushStrategyRoutingModule,
    HttpClientModule
  ]
})
export class OnPushStrategyModule { }
