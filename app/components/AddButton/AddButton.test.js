import 'react-native';
import React from 'react';
import {AddButton} from './AddButton';
import renderer from 'react-test-renderer';

describe('AddButton', () => {
  it(' AddButton renders correctly', () => {
    const tree = renderer.create(<AddButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
