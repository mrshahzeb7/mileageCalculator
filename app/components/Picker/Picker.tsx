import React, {useState} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {icons} from '../../assets';
import {iconSizes} from '../../theme';
import {Icon} from '../Icon/Icon';
import {TextField} from '../TextField/TextField';
import {getRandomElement} from '../../utils';

interface Props {
  onSelect: (item: any) => void;
  label: string;
  list: string[];
  style?: StyleProp<ViewStyle>;
}

const RightAccessory = () => {
  return <Icon size={iconSizes.medium} icon={icons.DropDownArrow} />;
};
export const Picker: React.FC<Props> = ({style, onSelect, label, list}) => {
  const [selectedItem, setSelectedItem] = useState<any>(getRandomElement(list));
  const onPress = () => {
    const randomElement = getRandomElement(list);
    setSelectedItem(randomElement);
    onSelect?.(randomElement);
  };
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <TextField
        label={label}
        value={selectedItem}
        editable={false}
        RightAccessory={RightAccessory}
      />
    </TouchableOpacity>
  );
};
