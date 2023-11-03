import React from 'react';
import {RowInput, RowInputProps} from '../RowInput/RowInput';
import {StyleProp, View, ViewStyle} from 'react-native';
import {spacing} from '../../theme';

interface Props {
  list: RowInputProps[];
  style: StyleProp<ViewStyle>;
}

export const ComponentTree: React.FC<Props> = ({style, list}) => {
  return (
    <View style={style}>
      {list?.map?.((item: RowInputProps, index: number) => {
        return (
          <RowInput
            style={$container}
            key={index}
            icon={item.icon}
            ChildOne={item.ChildOne}
            ChildTwo={item.ChildTwo}
          />
        );
      })}
    </View>
  );
};

const $container: ViewStyle = {
  marginTop: spacing.vertical.small,
  alignSelf: 'center',
  width: '100%',
  justifyContent: 'space-between',
};
