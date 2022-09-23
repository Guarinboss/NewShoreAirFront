import { createAction, props } from '@ngrx/store';
import { RouteState } from 'src/app/core/models/route.state';

 
export const loadRoute = createAction(
  '[Route] load route'
);
 
export const loadedRoute = createAction(
    '[Route] load route success',
  props<{ origin: string, destination:string, currency: string }>()
);


 