import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {HomeSectionItem} from '../../screens/Home';
import {Icon} from '../Icon/Icon';
import {borderRadius, colors, iconSizes, spacing} from '../../theme';

interface Props {
  item: HomeSectionItem;
  index: number;
}

export const HomeListItem: React.FC<Props> = ({item, index}) => {
  const $container: StyleProp<ViewStyle> = [
    styles.container,
    index === 0 && styles.topRadius,
    item?.style,
  ];
  return (
    <View style={$container}>
      {!!item?.title && <Text style={styles.title}>{item?.title}</Text>}
      <View style={styles.dataWrapper}>
        <View style={styles.valueWrapper}>
          {!!item?.leftIcon && (
            <Icon
              size={iconSizes.tiny}
              style={styles.leftIcon}
              icon={item?.leftIcon}
            />
          )}
          {!!item?.sign && <Text style={styles.sign}>{item?.sign}</Text>}
          {!!item?.value && <Text style={styles.value}>{item?.value}</Text>}
          {!!item?.unit && <Text style={styles.unit}>{item?.unit}</Text>}
        </View>
        <Text style={styles.details}>{item?.details}</Text>
      </View>
    </View>
  );
};

const $row: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

const textSpacing: TextStyle = {
  marginLeft: spacing.horizontal.tiny,
};

const radius = borderRadius.medium;

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.horizontal.medium,
    paddingVertical: spacing.vertical.tiny * 1.1,
  },
  dataWrapper: {
    justifyContent: 'space-between',

    ...$row,
  },
  valueWrapper: {
    ...$row,
  },
  leftIcon: {
    marginRight: spacing.horizontal.medium,
  },
  title: {
    color: colors.textDim,
    marginBottom: spacing.vertical.tiny,
  },
  sign: {
    color: colors.text,
  },
  value: {
    color: colors.text,
  },
  unit: {
    color: colors.textDim,
    ...textSpacing,
  },
  details: {
    color: colors.textDim,
  },

  topRadius: {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  },
});
