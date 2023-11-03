import 'react-native';
import React from 'react';
import {HeaderBackNavigation} from './HeaderBackNavigation';
import renderer from 'react-test-renderer';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const Parent = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <HeaderBackNavigation />
    </SafeAreaProvider>
  );
};

describe('HeaderBackNavigation', () => {
  it(' HeaderBackNavigation renders correctly', () => {
    const tree = renderer.create(<Parent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
