import { createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.action';
import { CounterStateModel } from '../models/counter-state.model';

const counterInitialState: CounterStateModel = {
  amount: 0,
  type: 'simple'
};

export default createReducer(
  counterInitialState,
  on(CounterActions.INCREASE, (counterState, { amount }) => {
    return { ...counterState, amount: counterState.amount + amount };
  }),
  on(CounterActions.DECREASE, (counterState, { amount }) => {
    return { ...counterState, amount: counterState.amount - amount };
  }),
  on(CounterActions.RESET, () => counterInitialState)
);
