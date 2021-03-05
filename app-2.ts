import { Action } from "./ngrx-fake/ngrx";
import { reducer } from './contador/contador.reducer'
import {
  decrementadorAction,
  dividirAction,
  incrementadorAction,
  multiplicarAction,
  resetAction
  } from "./contador/contador.actions";




console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));
console.log(reducer(10, resetAction));
