import * as Reducers from './reducers';
import { Global } from './models/models-redux';
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  global: Global
}

export const AppStateRedux: ActionReducerMap<AppState> = {
    global: Reducers.globalChargerIsActivatedReducer
}