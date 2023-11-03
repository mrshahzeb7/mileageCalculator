import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {icons} from '../../assets';
import {colors, iconSizes, spacing} from '../../theme';
import {Icon} from '../Icon/Icon';
import {responsiveHeight} from '../../utils';
import {TimeLineSectionItem, mileageUnit} from './timeLineListContent';

interface Props {
  item: TimeLineSectionItem;
  index: number;
}

export const timeLineListItemHeight = responsiveHeight(13);

export const TimeLineListItem: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        <LeftIcon />
        <View style={styles.detailWrapper}>
          <Text style={styles.title}>Refueling</Text>
          <Text style={styles.date}>{item?.date}</Text>

          <Mileage
            value={item?.meterReading + ' ' + mileageUnit.milesPerLitre}
          />
        </View>
      </View>

      <Text style={styles.price}>$ {item?.cost}</Text>
    </View>
  );
};

const Mileage = ({value}: {value?: string}) => {
  return (
    <View style={styles.mileageContainer}>
      <Icon icon={icons.Meter} color={colors.textDim} size={iconSizes.tiny} />
      <Text style={styles.mileage}>{value}</Text>
    </View>
  );
};

const LeftIcon = () => {
  return (
    <Icon
      containerStyle={styles.iconContainer}
      size={iconSizes.tiny}
      icon={icons.Gas}
      color={colors.light}
    />
  );
};
const $row: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

const $textStyle: TextStyle = {
  color: colors.text,
};

const $dimTextStyle: TextStyle = {
  color: colors.textDim,
};
// styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.horizontal.small,
    justifyContent: 'space-between',
    height: timeLineListItemHeight,
    ...$row,
  },

  leftWrapper: {
    ...$row,
  },

  iconContainer: {
    backgroundColor: colors.primaryButton,
    height: iconSizes.large,
    width: iconSizes.large,
    borderRadius: iconSizes.large,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailWrapper: {
    marginLeft: spacing.horizontal.medium,
    marginTop: spacing.vertical.medium,
  },
  mileageContainer: {
    justifyContent: 'center',
    ...$row,
  },
  title: {
    ...$textStyle,
  },
  date: {
    marginVertical: spacing.vertical.tiny,
    ...$dimTextStyle,
  },
  mileage: {
    color: colors.textDim,
    marginLeft: spacing.horizontal.small,
    ...$dimTextStyle,
  },
  price: {
    ...$textStyle,
  },
});
