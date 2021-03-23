import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateModel } from '../models/app-state.model';
import { CounterStateModel } from '../models/counter-state.model';

const selectCounterFeature = createFeatureSelector<AppStateModel, CounterStateModel>('counter');

export const SELECT_COUNTER_AMOUNT = createSelector(
  selectCounterFeature,
  (state: CounterStateModel) => state.amount
);
