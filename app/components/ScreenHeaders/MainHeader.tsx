import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {responsiveHeight} from '../../utils';
import {colors, iconSizes, spacing, styleGlobals} from '../../theme';
import {Icon} from '../Icon/Icon';
import {icons} from '../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {}

export const MainHeader: React.FC<Props> = () => {
  const padding: ViewStyle = {
    paddingTop: useSafeAreaInsets().top,
  };

  const onPress = () => null;

  return (
    <View style={[styles.container, padding]}>
      <View style={styles.wrapper}>
        <Icon size={iconSizes.small} icon={icons.Menu} onPress={onPress} />
      </View>
    </View>
  );
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
  wrapper: {},
});
