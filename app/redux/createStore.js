import {applyMiddleware, compose, createStore} from 'redux';

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  enhancers.push(applyMiddleware(...middleware));

  const createAppropriateStore = createStore;

  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  return {
    store,
  };
};
