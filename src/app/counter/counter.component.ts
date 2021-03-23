import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as CounterActions from '../store/actions/counter.action';
import * as CounterSelectors from '../store/selectors/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public amount$: Observable<number>;
  public increment: number;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.amount$ = this.store.pipe(select(CounterSelectors.SELECT_COUNTER_AMOUNT));
  }

  public increaseCounter(increment: number): void {
    this.store.dispatch(CounterActions.INCREASE({ amount: increment }));
  }

  public decrementCounter(decrement: number): void {
    this.store.dispatch(CounterActions.DECREASE({amount: decrement}));
  }

  public resetCounter(): void {
    this.store.dispatch(CounterActions.RESET());
  }
}
