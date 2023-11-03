import React, {useEffect} from 'react';
import {RefreshControl, SectionList, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {HomeListItem, HomeListSectionHeader, Loader} from '../../components';
import {MainActions, useAppSelector} from '../../redux';
import {colors, styleGlobals} from '../../theme';
import {keyExtractor} from '../../utils';
import {HomeListSection} from './homeContent';

export const Home = () => {
  const {data, isLoading} = useAppSelector(state => state?.main?.homeList);
  const dispatch = useDispatch();

  const getData = () => {
    if (data?.length) {
      return;
    }
    setTimeout(() => {
      dispatch(MainActions.homeContentRequest());
    }, 1000);
  };

  useEffect(getData, []);

  const onRefresh = () => null;
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <SectionList
          refreshControl={
            <RefreshControl
              tintColor={colors.light}
              refreshing={false}
              onRefresh={onRefresh}
            />
          }
          // onRefresh={onRefresh}
          stickySectionHeadersEnabled={false}
          sections={data}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

const renderItem = (props: any) => {
  return <HomeListItem {...props} />;
};

const renderSectionHeader = ({section}: {section: HomeListSection}) => {
  return <HomeListSectionHeader {...section} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    width: '95%',
    alignSelf: 'center',
    ...styleGlobals.listPaddingBottom,
  },
});
