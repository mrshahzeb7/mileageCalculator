import 'react-native';
import React from 'react';
import {AppNavigator} from './AppNavigator';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import createStore from '../../redux';

import {Provider} from 'react-redux';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
const store = createStore();

const Parent = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

it('AppNavigator renders correctly', () => {
  const tree = renderer.create(<Parent />).toJSON();
  expect(tree).toMatchSnapshot();
});
