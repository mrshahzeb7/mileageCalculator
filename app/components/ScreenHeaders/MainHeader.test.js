import 'react-native';
import React from 'react';
import {MainHeader} from './MainHeader';
import renderer from 'react-test-renderer';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const Parent = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <MainHeader />
    </SafeAreaProvider>
  );
};

describe('MainHeader', () => {
  it(' MainHeader renders correctly', () => {
    const tree = renderer.create(<Parent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
