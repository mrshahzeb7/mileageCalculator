import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from '../../assets';
import {colors, fontSize, iconSizes, spacing, styleGlobals} from '../../theme';
import {responsiveHeight} from '../../utils';
import {Icon} from '../Icon/Icon';

interface Props {
  onLeftPress?: () => void;
  title: string;
  RightAction?: any;
}

export const HeaderBackNavigation: React.FC<Props> = ({
  onLeftPress,
  title,
  RightAction,
}) => {
  const padding: ViewStyle = {
    paddingTop: useSafeAreaInsets().top,
  };

  return (
    <View style={[styles.container, padding]}>
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <Icon
            testID="HeaderBackButton"
            onPress={onLeftPress}
            size={iconSizes.small}
            color={colors.light}
            icon={icons.Back}
          />

          <Text style={styles.title}>{title}</Text>
        </View>

        {!!RightAction && RightAction}
      </View>
    </View>
  );
};

const $row: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};
// styles
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(12),

    paddingHorizontal: spacing.horizontal.medium,
    justifyContent: 'center',
    ...styleGlobals.lowElevation,
    backgroundColor: colors.primary,
  },
  wrapper: {
    ...$row,
    justifyContent: 'space-between',
  },
  leftWrapper: {
    ...$row,
  },
  title: {
    color: colors.text,
    fontSize: fontSize.large,
    marginLeft: spacing.horizontal.medium,
  },
});
