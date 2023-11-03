import 'react-native';
import React from 'react';
import {Icon} from './Icon';
import renderer from 'react-test-renderer';

describe('Icon', () => {
  it(' Icon renders correctly', () => {
    const tree = renderer.create(<Icon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
