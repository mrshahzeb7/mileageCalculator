import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';
import {icons} from '../../assets';
import {borderRadius} from '../../theme';

export type HomeSectionItem = {
  leftIcon?: any;
  sign?: '$';
  value?: string;
  unit?: string;
  details?: string;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

type SectionItemList = HomeSectionItem[];

export type HomeListSection = {
  title: string;
  icon: ImageSourcePropType;
  data: SectionItemList;
};

const mileageUnit = {
  milesPerLitre: 'mi/l',
};

const $bottomRadius: StyleProp<ViewStyle> = {
  borderBottomLeftRadius: borderRadius.medium,
  borderBottomRightRadius: borderRadius.medium,
};

const homeContent: HomeListSection[] = [
  {
    title: 'Gas',
    icon: icons.Gas,
    data: [
      {
        leftIcon: icons.Drop,
        value: '6.458',
        unit: mileageUnit.milesPerLitre,
        details: 'Average fuel consumption',
      },
      {
        leftIcon: icons.GreenArrow,
        value: '6.896',
        unit: mileageUnit.milesPerLitre,
        details: 'Last fuel consumption',
      },
      {
        leftIcon: icons.RedArrow,
        sign: '$',
        value: '1.419',
        details: 'Last fuel price',
      },
      {
        details: '2021-09-24 . 7 days ago',
        style: $bottomRadius,
      },
    ],
  },
  {
    title: 'Cost',
    icon: icons.Cost,
    data: [
      {
        title: 'This Month',
        leftIcon: icons.Gas,
        sign: '$',
        value: '0.00',

        details: 'Gas',
      },
      {
        leftIcon: icons.Cost,
        sign: '$',
        value: '0.00',

        details: 'Other costs',
      },
      {
        title: 'Previous Month',
        leftIcon: icons.Gas,
        sign: '$',
        value: '57.00',

        details: 'Gas',
      },
      {
        leftIcon: icons.Cost,
        sign: '$',
        value: '0.00',

        details: 'Other costs',
        style: $bottomRadius,
      },
    ],
  },
  {
    title: 'Last entries',
    icon: icons.RedArrow,
    data: [
      {
        title: 'september 2021',
        leftIcon: icons.Gas,
        sign: '$',
        value: '57.00',

        details: 'Refueling',
      },
      {
        title: 'July 2021',
        leftIcon: icons.Gas,
        sign: '$',
        value: '52.38',

        details: 'Refueling',
        style: $bottomRadius,
      },
    ],
  },
];

export {homeContent};
