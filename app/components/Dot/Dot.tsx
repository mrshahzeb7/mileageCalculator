import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {responsiveFontSize, responsiveWidth} from '../../utils';
import {colors} from '../../theme';

interface Props {
  style?: StyleProp<ViewStyle>;
}
const dotSize = responsiveFontSize(2);
export const Dot: React.FC<Props> = ({style}) => {
  return <View style={[styles.dot, style]} />;
};

// styles
const styles = StyleSheet.create({
  dot: {
    height: dotSize,
    width: dotSize,
    borderRadius: dotSize / 2,
    backgroundColor: colors.primaryButton,
    marginLeft: responsiveWidth(5.5),
  },
});
