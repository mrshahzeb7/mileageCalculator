import 'react-native';
import React from 'react';
import {Modal} from './Modal';
import renderer from 'react-test-renderer';

describe('Modal', () => {
  it(' Modal renders correctly', () => {
    const tree = renderer.create(<Modal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
