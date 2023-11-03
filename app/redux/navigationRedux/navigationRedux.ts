import {createActions, createReducer} from 'reduxsauce';
// @ts-ignore
import Immutable from 'seamless-immutable';
import {routeNames} from '../../navigator';
import {navigationReduxType} from '../types/reduxTypes';
/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  changeTabScreen: ['payload'],
});

export const NavigationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  selectedTabScreen: routeNames.home,
});

export const changeTabScreen = (
  state: navigationReduxType,
  {payload}: {payload: string},
) => {
  return {
    ...state,
    selectedTabScreen: payload,
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_TAB_SCREEN]: changeTabScreen,
});
