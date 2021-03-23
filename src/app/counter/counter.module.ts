import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CounterComponent } from './counter.component';
import { CounterRoutingModule } from './counter-routing.module';
import { StoreModule } from '@ngrx/store';
import counterReducer from '../store/reducers/counter.reducer';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule,
    StoreModule.forFeature('counter', counterReducer)
  ]
})
export class CounterModule { }
