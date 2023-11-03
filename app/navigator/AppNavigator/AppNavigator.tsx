import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {Home, TimeLine} from '../../screens';
import {routeNames} from '../routeNames';

interface Props {}

const screenComponents = {
  [routeNames.home]: Home, // Use the imported Home component
  [routeNames.timeLine]: TimeLine, // Use the imported TimeLine component
};

export const AppNavigator: React.FC<Props> = () => {
  const selectedScreen = useAppSelector(
    state => state.navigation.selectedTabScreen,
  );

  const SelectedComponent = screenComponents[selectedScreen];

  return (
    <View style={styles.container}>
      {SelectedComponent && <SelectedComponent />}
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
