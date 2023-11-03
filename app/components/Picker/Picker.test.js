import 'react-native';
import React from 'react';
import {Picker} from './Picker';
import renderer from 'react-test-renderer';

describe('Picker', () => {
  it(' Picker renders correctly without list', () => {
    renderer.create(<Picker />).toJSON();
  });

  it(' Picker renders correctly with single ite,', () => {
    const list = ['test'];
    renderer.create(<Picker list={list} />).toJSON();
  });
});
