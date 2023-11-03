import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {RootContainer} from './RootContainer';
import {colors} from './theme';
import {Provider} from 'react-redux';
import createStore from './redux';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = createStore();
interface Props {}
export const App: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootContainer />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
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
