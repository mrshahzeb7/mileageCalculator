import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../theme';
import {responsiveHeight, responsiveWidth} from '../../utils';

interface Props {}

export const TimeLineBar: React.FC<Props> = () => {
  return <View style={styles.line} />;
};

// styles
const styles = StyleSheet.create({
  line: {
    position: 'absolute',
    left: responsiveWidth(7),
    backgroundColor: colors.primaryButton,
    width: responsiveWidth(1),
    height: responsiveHeight(100),
  },
});
