import { createReducer, on } from '@ngrx/store';
import { regState } from './reg.state';
import { addReg, deleteReg, loadReg, updateReg } from './reg.action';

const _regReducer = createReducer(
  regState,
  on(loadReg, (state) => {
    return {
      ...state,
    };
  }),
  on(addReg, (state, action) => {
    let newReg = { ...action.regInput };
    newReg.id = state.regList.length + 1;
    return {
      ...state,
      regList: [...state.regList, newReg],
    };
  }),
  on(deleteReg, (state, action) => {
    const _RegId = action.id;
    const newList = state.regList.filter((reg) => {
      return _RegId !== reg.id;
    });
    return {
      ...state,
      regList: newList,
    };
  }),
  on(updateReg, (state, action) => {
    const _reg = { ...action.regInput };
    console.log('_reg', _reg);
    const updateList = state.regList.map((reg) => {
      console.log('reg', reg);
      return _reg.id === reg.id ? _reg : reg;
    });
    return {
      ...state,
      regList: updateList,
    };
  })
);

export function regReducer(state: any, action: any) {
  return _regReducer(state, action);
}
