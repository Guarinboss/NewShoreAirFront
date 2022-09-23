import { createReducer, on } from '@ngrx/store';
import { RouteState } from 'src/app/core/models/route.state';
import { loadedRoute, loadRoute } from '../actions/route.actions';


export const initialState: RouteState = {
  destination: '',
  origin: '',
  currency: 'USD',
};

export const routeReducer = createReducer(
  initialState,
  on(loadRoute, (state) => {
    return { ...state, loading: true }
  }),
  on(loadedRoute, (state, { destination, origin, currency }) => {
    return { ...state, destination, origin, currency }
  })
);