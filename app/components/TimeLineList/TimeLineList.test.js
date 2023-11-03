import 'react-native';
import React from 'react';
import {TimeLineList} from './TimeLineList';
import renderer from 'react-test-renderer';

describe('TimeLineList', () => {
  it(' TimeLineList renders correctly', () => {
    const tree = renderer.create(<TimeLineList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
