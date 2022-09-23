import { createSelector } from '@ngrx/store';
import { RouteState } from 'src/app/core/models/route.state';
import { AppState } from '../app.state';
 
export const selectRouteFeature = (state: AppState) => state.route;
 
export const selectRoute = createSelector(
    selectRouteFeature,
  (state: RouteState) => state
);

export const selectOrigin = createSelector(
    selectRouteFeature,
  (state: RouteState) => state.origin
);

export const selectDestination = createSelector(
    selectRouteFeature,
  (state: RouteState) => state.destination
);

export const selectCurrency = createSelector(
  selectRouteFeature,
(state: RouteState) => state.currency
);