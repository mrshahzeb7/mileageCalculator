import 'react-native';
import React from 'react';
import {Label} from './Label';
import renderer from 'react-test-renderer';

describe('Label', () => {
  it(' Label renders correctly', () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
