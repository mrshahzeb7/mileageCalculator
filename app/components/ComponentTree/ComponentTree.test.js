import 'react-native';
import React from 'react';
import {ComponentTree} from './ComponentTree';
import renderer from 'react-test-renderer';

describe('ComponentTree', () => {
  it(' ComponentTree renders correctly', () => {
    const tree = renderer.create(<ComponentTree />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
