import {TimeLineContentType} from '../../components/TimeLineList/timeLineListContent';
import {HomeListSection} from '../../screens/Home';

// we should create separate file for types as it is not huge application so adding on a single file

export type navigationReduxType = {
  merge: any;
  selectedTabScreen: string;
};

export type mainReduxType = {
  homeList: {
    data: HomeListSection[];
    isLoading: boolean;
  };
  timeLineList: {
    data: TimeLineContentType;
    isLoading: boolean;
  };
  merge: any;
};

export type RootState = {
  navigation: navigationReduxType;
  main: mainReduxType;
};
