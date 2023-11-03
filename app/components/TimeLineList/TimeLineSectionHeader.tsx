import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, spacing} from '../../theme';
import {responsiveWidth} from '../../utils';
import {Dot} from '../Dot/Dot';

interface Props {
  title: string;
}

export const TimeLineSectionHeader: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Dot />
      <Text style={styles.date}>{title}</Text>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.vertical.medium,
    marginBottom: spacing.vertical.small,
  },
  date: {
    color: colors.primaryButton,
    marginLeft: responsiveWidth(8),
  },
});
