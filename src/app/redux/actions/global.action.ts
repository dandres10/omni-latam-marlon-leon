import { Global } from '../models/models-redux';
import { TypesRedux } from '../types/types-redux';
import { createAction, props } from '@ngrx/store';

export const setGlobalChargerIsActivated =
    createAction(TypesRedux.setGlobalChargerIsActivated, props<Global>());