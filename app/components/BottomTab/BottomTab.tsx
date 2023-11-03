import React, {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {NavigationActions} from '../../redux';
import {colors, spacing, styleGlobals} from '../../theme';
import {responsiveHeight} from '../../utils';
import {BottomTabItem, BottomTabItemType} from './BottomTabItem';
import {BottomTabScreensType, bottomTabScreens} from './bottomTabContent';

interface Props {}

export const BottomTab: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const padding: ViewStyle = {
    paddingBottom: useSafeAreaInsets().bottom,
  };
  const [screens, setScreens] =
    useState<BottomTabScreensType>(bottomTabScreens);

  const onTabPressed = (selectedTab: BottomTabItemType) => {
    dispatch(NavigationActions.changeTabScreen(selectedTab.title));
    const newScreens = screens?.map(item => {
      item.selected = item.id === selectedTab?.id;
      return item;
    });

    setScreens(newScreens);
  };
  const renderItem = (item: BottomTabItemType) => {
    return <BottomTabItem key={item.id} item={item} onPress={onTabPressed} />;
  };
  return (
    <View style={[styles.container, padding]}>
      <View style={styles.itemWrapper}>{bottomTabScreens.map(renderItem)}</View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    ...styleGlobals.lowElevation,
    backgroundColor: colors.primary,
  },
  itemWrapper: {
    minHeight: responsiveHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.vertical.tiny,
  },
});
