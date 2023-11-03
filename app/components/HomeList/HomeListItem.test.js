import 'react-native';
import React from 'react';
import {HomeListItem} from './HomeListItem';
import renderer from 'react-test-renderer';

describe('HomeListItem', () => {
  it(' HomeListItem renders correctly', () => {
    const tree = renderer.create(<HomeListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
