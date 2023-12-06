import { createAction, props } from '@ngrx/store';

export const loadReg = createAction('LOADREG');
export const addReg = createAction('ADDREG', props<{ regInput: any }>());
export const deleteReg = createAction('DELETEREG', props<{ id: number }>());
export const updateReg = createAction('UPDATEREG', props<{ regInput: any }>());
