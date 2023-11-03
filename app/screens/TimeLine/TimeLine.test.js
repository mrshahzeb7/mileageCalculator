import React from 'react';
import 'react-native';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import createStore from '../../redux';
import {TimeLine} from './TimeLine';
const store = createStore();

describe('TimeLine', () => {
  it('TimeLine renders correctly', () => {
    const tree = renderer.create(<Parent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
const Parent = () => {
  return (
    <Provider store={store}>
      <TimeLine />
    </Provider>
  );
};
