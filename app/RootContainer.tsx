import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTab, MainHeader, StatusBar} from './components';

import {AppNavigator} from './navigator';
import {AddEntry} from './screens';
import {colors} from './theme';

interface Props {}

export const RootContainer: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <StatusBar />
      <AppNavigator />
      <AddEntry />
      <BottomTab />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.background,
  },
});
