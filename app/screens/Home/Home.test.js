import 'react-native';
import React from 'react';
import {Home} from './Home';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import createStore from '../../redux';

const store = createStore();

const Parent = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

describe('Home', () => {
  it('Home renders correctly', () => {
    const tree = renderer.create(<Parent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
