import React from 'react';
import {RefreshControl, StyleSheet, View} from 'react-native';
import {colors, spacing, styleGlobals} from '../../theme';
import {List} from '../../thirdParties';
import {keyExtractor} from '../../utils';
import {Dot} from '../Dot/Dot';
import {TimeLineBar} from './TimeLineBar';
import {TimeLineListItem, timeLineListItemHeight} from './TimeLineListItem';
import {TimeLineSectionHeader} from './TimeLineSectionHeader';
import {TimeLineContentType} from './timeLineListContent';

interface Props {
  data: TimeLineContentType;
}

export const TimeLineList: React.FC<Props> = ({data}) => {
  const onRefresh = () => {};

  return (
    <View style={styles.container}>
      <TimeLineBar />

      <List
        estimatedItemSize={timeLineListItemHeight}
        ListHeaderComponent={<Dot style={styles.dot} />}
        refreshControl={
          <RefreshControl
            tintColor={colors.light}
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
        data={data}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const renderItem = (props: any) => {
  if (typeof props.item === 'string') {
    return <TimeLineSectionHeader title={props.item} />;
  }
  return <TimeLineListItem {...props} />;
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    ...styleGlobals.listPaddingBottom,
  },
  dot: {
    marginBottom: spacing.vertical.small,
  },
});
