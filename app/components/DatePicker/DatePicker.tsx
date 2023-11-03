import React, {useState} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {getRandomDate, getRandomTime} from '../../utils';
import {TextField} from '../TextField/TextField';

interface Props {
  onSelect: (item: any) => void;
  type: DatePickerType;
  style: StyleProp<ViewStyle>;
}

export enum DatePickerType {
  Date = 'Date',
  Time = 'Time',
}
const randomDataSelector = {
  [DatePickerType.Date]: getRandomDate,
  [DatePickerType.Time]: getRandomTime,
};
export const DatePicker: React.FC<Props> = ({onSelect, type, style}) => {
  const [selectedItem, setSelectedItem] = useState<any>(
    randomDataSelector[type](),
  );

  const onPress = () => {
    const randomDate = randomDataSelector[type]();
    onSelect?.(randomDate);
    setSelectedItem(randomDate);
  };

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <TextField label={type} value={selectedItem} editable={false} />
    </TouchableOpacity>
  );
};
