import { createAction, props } from '@ngrx/store';
import { CounterActionsEnum } from '../enums/counter-actions.enum';
import { CounterPropsModel } from '../models/counter-props.model';

export const INCREASE = createAction(CounterActionsEnum.INCREASE, props<CounterPropsModel>());
export const DECREASE = createAction(CounterActionsEnum.DECREASE, props<CounterPropsModel>());
export const RESET = createAction(CounterActionsEnum.RESET);

