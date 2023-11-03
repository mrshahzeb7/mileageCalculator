import 'react-native';
import React from 'react';
import {AddEntry} from './AddEntry';
import {AddEntryDesign} from './AddEntryDesign';
import renderer from 'react-test-renderer';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const Parent = ({children}) => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    {children}
  </SafeAreaProvider>
);

it('renders AddEntry correctly', () => {
  const tree = renderer
    .create(
      <Parent>
        <AddEntry />
      </Parent>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders AddEntryDesign correctly', () => {
  const tree = renderer
    .create(
      <Parent>
        <AddEntryDesign />
      </Parent>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
