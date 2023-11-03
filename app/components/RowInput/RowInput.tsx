import React, {ReactElement} from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {colors, iconSizes, spacing} from '../../theme';
import {Icon} from '../Icon/Icon';

export interface RowInputProps {
  icon: ImageSourcePropType;
  ChildOne: ReactElement;
  ChildTwo?: ReactElement;
  style?: StyleProp<ViewStyle>;
}

export const RowInput: React.FC<RowInputProps> = ({
  icon,
  ChildOne,
  ChildTwo,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Icon
        style={styles.icon}
        size={iconSizes.small}
        color={colors.primaryButton}
        icon={icon}
      />

      {!!ChildOne && ChildOne}
      {!!ChildTwo && ChildTwo}
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: spacing.horizontal.medium,
  },
  icon: {
    marginHorizontal: spacing.small,
  },
});
