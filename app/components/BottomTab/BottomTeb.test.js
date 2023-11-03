import 'react-native';
import React from 'react';
import {BottomTab} from './BottomTab';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import createStore from '../../redux';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const store = createStore();

const Parent = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <BottomTab />
      </Provider>
    </SafeAreaProvider>
  );
};

describe('BottomTab', () => {
  it(' BottomTab renders correctly', () => {
    const tree = renderer.create(<Parent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
