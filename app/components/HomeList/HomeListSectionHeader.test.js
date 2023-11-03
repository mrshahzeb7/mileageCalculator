import 'react-native';
import React from 'react';
import {HomeListSectionHeader} from './HomeListSectionHeader';
import renderer from 'react-test-renderer';

describe('HomeListSectionHeader', () => {
  it(' HomeListSectionHeader renders correctly', () => {
    const tree = renderer.create(<HomeListSectionHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
