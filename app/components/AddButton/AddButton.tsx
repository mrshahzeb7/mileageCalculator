import React from 'react';
import {StyleSheet} from 'react-native';
import {icons} from '../../assets';
import {colors, iconSizes} from '../../theme';
import {responsiveHeight, responsiveWidth} from '../../utils';
import {Icon} from '../Icon/Icon';

interface Props {
  onPress?: () => void;
}
const size = iconSizes.extralarge;
export const AddButton: React.FC<Props> = ({onPress}) => {
  return (
    <Icon
      onPress={onPress}
      size={iconSizes.small}
      containerStyle={styles.container}
      icon={icons.Plus}
    />
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    backgroundColor: colors.primaryButton,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 100,
    bottom: responsiveHeight(13),
    right: responsiveWidth(5),
  },
});
