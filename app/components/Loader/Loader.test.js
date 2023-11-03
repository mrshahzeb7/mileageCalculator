import 'react-native';
import React from 'react';
import {Loader} from './Loader';
import renderer from 'react-test-renderer';

describe('Loader', () => {
  it(' Loader renders correctly', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
