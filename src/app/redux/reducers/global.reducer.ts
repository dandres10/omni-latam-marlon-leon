import { Global } from "../models/models-redux";
import * as reduxActions from '../actions';
import { createReducer, on, Action } from '@ngrx/store';

const initialState = new Global()

const setGlobalChargerIsActivatedReducer = createReducer(
    initialState,
    on(reduxActions.setGlobalChargerIsActivated, (state, global) => ({
        ...state,
        chargerIsActivated: global.chargerIsActivated
    }))
)

export function globalChargerIsActivatedReducer(state: any, action: Action) {
    return setGlobalChargerIsActivatedReducer(state, action);
}