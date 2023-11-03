import 'react-native';
import React from 'react';
import {DatePicker, DatePickerType} from './DatePicker';
import renderer from 'react-test-renderer';

describe('DatePicker', () => {
  it(' DatePicker renders correctly', () => {
    renderer.create(<DatePicker type={DatePickerType.Date} />);
  });

  it(' TimePicker renders correctly', () => {
    renderer.create(<DatePicker type={DatePickerType.Time} />);
  });
});
