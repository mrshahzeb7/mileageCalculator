import 'react-native';
import React from 'react';
import {TimeLineListItem} from './TimeLineListItem';
import renderer from 'react-test-renderer';

describe('TimeLineListItem', () => {
  it(' TimeLineListItem renders correctly', () => {
    const tree = renderer.create(<TimeLineListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
