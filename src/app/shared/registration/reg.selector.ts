import { createFeatureSelector, createSelector } from '@ngrx/store';

const getRegSlector = createFeatureSelector<any>('reg');

export const getRegs = createSelector(getRegSlector, (state) => {
  return state.regList;
});
export const getRegById = (regId: number) =>
  createSelector(getRegSlector, (state) => {
    return state.regList.find((reg: any) => reg.id == regId);
  });
