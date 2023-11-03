import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {colors} from '../../theme';

interface Props {}

export const Loader: React.FC<Props> = () => {
  return (
    <View style={$container}>
      <ActivityIndicator color={colors.primaryButton} size={'large'} />
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};
