import 'react-native';
import React from 'react';
import {RowInput} from './RowInput';
import renderer from 'react-test-renderer';

describe('RowInput', () => {
  it(' RowInput renders correctly', () => {
    const tree = renderer.create(<RowInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
