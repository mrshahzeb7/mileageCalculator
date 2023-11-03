import {icons} from '../../assets';
import {BottomTabItemType} from './BottomTabItem';

export type BottomTabScreensType = BottomTabItemType[];

export const bottomTabScreens: BottomTabScreensType = [
  {
    id: 1,
    icon: icons.Home,
    title: 'Home',
    selected: false,
  },
  {
    id: 2,
    icon: icons.TimeLine,
    title: 'TimeLine',
    selected: false,
  },
];
