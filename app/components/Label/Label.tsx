import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, spacing} from '../../theme';

interface Props {
  label: string | undefined;
}

export const Label: React.FC<Props> = ({label}) => {
  return !!label && <Text style={styles.labelStyle}>{label}</Text>;
};

// styles
const styles = StyleSheet.create({
  labelStyle: {
    marginLeft: spacing.horizontal.medium,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.horizontal.tiny,
    zIndex: 1,
    color: colors.textDim,
    alignSelf: 'flex-start',
    position: 'absolute',
    top: -spacing.vertical.tiny,
  },
});
