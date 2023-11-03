/**
 * @format
 */

import 'react-native';
import React from 'react';
import {RootContainer} from '../app/RootContainer';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import createStore from '../app/redux';
const store = createStore();

const Parent = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootContainer />
      </SafeAreaProvider>
    </Provider>
  );
};

it('app renders correctly', () => {
  const tree = renderer.create(<Parent />).toJSON();
  expect(tree).toMatchSnapshot();
});
