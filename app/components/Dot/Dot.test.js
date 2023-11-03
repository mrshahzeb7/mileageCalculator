import 'react-native';
import React from 'react';
import {Dot} from './Dot';
import renderer from 'react-test-renderer';

describe('Dot', () => {
  it(' Dot renders correctly', () => {
    const tree = renderer.create(<Dot />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
