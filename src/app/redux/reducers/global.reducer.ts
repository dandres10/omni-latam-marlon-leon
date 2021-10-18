import * as reduxActions from '../actions';
import { Global } from "../models/models-redux";
import { createReducer, on, Action } from '@ngrx/store';

const initialState = new Global()

const setGlobalChargerIsActivatedReducer = createReducer(
    initialState,
    on(reduxActions.setGlobalChargerIsActivated, (state, global) => ({
        ...state,
        chargerIsActivated: global.chargerIsActivated
    })),
    on(reduxActions.setGlobalCurrentCarsByBrand, (state, global) => ({
        ...state,
        currentCarsByBrand: global.currentCarsByBrand
    })),
    on(reduxActions.setGlobalSelectedCar, (state, global) => ({
        ...state,
        selectedCar: global.selectedCar
    }))
)

export function globalChargerIsActivatedReducer(state: any, action: Action) {
    return setGlobalChargerIsActivatedReducer(state, action);
}