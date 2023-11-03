import React from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, fontSize, iconSizes, spacing} from '../../theme';
import {Icon} from '../Icon/Icon';
import {useAppSelector} from '../../redux';

export type BottomTabItemType = {
  id: number;
  icon: ImageSourcePropType;
  title: string;
  selected: boolean;
};

interface Props {
  item: BottomTabItemType;
  onPress: (item: BottomTabItemType) => void;
}

export const BottomTabItem: React.FC<Props> = ({item, onPress}) => {
  const selectedScreen = useAppSelector(
    state => state?.navigation?.selectedTabScreen,
  );

  const onItemPressed = () => {
    onPress?.(item);
  };

  const isSelectedTab = item.title === selectedScreen;
  return (
    <TouchableOpacity style={styles.container} onPress={onItemPressed}>
      <Icon
        style={[styles.icon, isSelectedTab && styles.selectedIcon]}
        size={iconSizes.small}
        icon={item.icon}
      />

      <Text style={[styles.title, isSelectedTab && styles.selectedTitle]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    tintColor: colors.bottomTabIcon,
  },
  selectedIcon: {
    tintColor: colors.selectedBottomTabIcon,
  },
  title: {
    color: colors.bottomTabIcon,
    fontSize: fontSize.small,
    marginTop: spacing.vertical.tiny,
  },
  selectedTitle: {
    color: colors.selectedBottomTabIcon,
  },
});
