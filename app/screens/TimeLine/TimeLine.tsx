import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Loader, TimeLineList} from '../../components';
import {MainActions, useAppSelector} from '../../redux';
import {useDispatch} from 'react-redux';

interface Props {}

export const TimeLine: React.FC<Props> = () => {
  const {data, isLoading} = useAppSelector(state => state?.main?.timeLineList);
  const dispatch = useDispatch();

  const getData = () => {
    if (data?.length) {
      return;
    }
    setTimeout(() => {
      dispatch(MainActions.timeLineContentRequest());
    }, 1000);
  };

  useEffect(() => {
    getData();

    const timer = setTimeout(() => {
      // @ts-ignore

      data?.length && alert(`There are ${data?.length} items in this list`);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : <TimeLineList data={data} />}
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
