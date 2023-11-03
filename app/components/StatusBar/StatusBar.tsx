import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import {colors} from '../../theme';

interface Props {}

export const StatusBar: React.FC<Props> = () => {
  return (
    <RNStatusBar
      backgroundColor={colors.transparent}
      barStyle={'light-content'}
      translucent={true}
    />
  );
};

// styles
