import { createReducer, on } from '@ngrx/store';
import { decrementCount, incrementCount } from '../actions/counter.actions';

export const initialState = 10;

export const counterReducer = createReducer(
  initialState,
  on(incrementCount, (state) => state + 1),
  on(decrementCount, (state) => state - 1)
);
