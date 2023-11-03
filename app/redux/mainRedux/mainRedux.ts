import {createActions, createReducer} from 'reduxsauce';
// @ts-ignore
import Immutable from 'seamless-immutable';
import {homeContent} from '../../screens/Home';
import {mainReduxType} from '../types/reduxTypes';
import {timeLineContent} from '../../components/TimeLineList/timeLineListContent';
/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  homeContentRequest: null,
  timeLineContentRequest: null,
  addEntryRequest: ['payload'],
});

export const MainTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  homeList: {
    data: [],
    isLoading: true,
  },

  timeLineList: {
    data: [],
    isLoading: true,
  },
});

export const homeContentRequest = (state: mainReduxType) => {
  return {
    ...state,
    homeList: {
      ...state.homeList,
      data: homeContent,
      isLoading: false,
    },
  };
};

export const addEntryRequest = (state: mainReduxType, {payload}: any) => {
  __DEV__ && console.log(JSON.stringify(state, null, 8));
  const newList = [payload, ...state?.timeLineList?.data];

  return {
    ...state,
    timeLineList: {
      ...state.timeLineList,
      data: newList,
    },
  };
};

export const timeLineContentRequest = (state: mainReduxType) => {
  return {
    ...state,
    timeLineList: {
      ...state.timeLineList,
      data: timeLineContent,
      isLoading: false,
    },
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOME_CONTENT_REQUEST]: homeContentRequest,
  [Types.TIME_LINE_CONTENT_REQUEST]: timeLineContentRequest,
  [Types.ADD_ENTRY_REQUEST]: addEntryRequest,
});
