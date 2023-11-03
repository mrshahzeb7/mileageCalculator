import 'react-native';
import React from 'react';
import {TimeLineBar} from './TimeLineBar';
import renderer from 'react-test-renderer';

describe('TimeLineBar', () => {
  it(' TimeLineBar renders correctly', () => {
    const tree = renderer.create(<TimeLineBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
