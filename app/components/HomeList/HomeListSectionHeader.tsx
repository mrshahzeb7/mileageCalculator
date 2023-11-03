import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {borderRadius, colors, iconSizes, spacing} from '../../theme';
import {Icon} from '../Icon/Icon';

interface Props {
  title: any;
  data: any;
  icon: any;
}

export const HomeListSectionHeader = ({title, icon}: Props) => {
  return (
    <View style={styles.container}>
      <Icon size={iconSizes.tiny} style={styles.icon} icon={icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: borderRadius.extraLarge,
    paddingHorizontal: spacing.horizontal.small,
    paddingVertical: spacing.vertical.tiny,
    marginVertical: spacing.vertical.small,
  },
  icon: {
    tintColor: colors.primaryButton,
  },
  title: {marginLeft: spacing.horizontal.tiny, color: colors.text},
});
