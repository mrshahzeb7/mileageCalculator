import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {icons} from '../../assets';
import {
  ComponentTree,
  DatePicker,
  DatePickerType,
  HeaderBackNavigation,
  Icon,
  Picker,
  RowInputProps,
  TextField,
} from '../../components';
import {colors, iconSizes, spacing} from '../../theme';
import {
  getCommaSeparatedValue,
  getDayForTimeLine,
  inputLabels,
  placeHolders,
  responsiveWidth,
} from '../../utils';
import {MainActions} from '../../redux';
import {useDispatch} from 'react-redux';
import {TimeLineSectionItem} from '../../components/TimeLineList/timeLineListContent';

const gasTypeList = [
  'Regular ',
  'Regular Two',
  'Regular Three',
  'Regular Four',
  'Regular Five',
  'Regular Six',
  'Regular Seven',
  'Regular Eight',
];
interface Props {
  closeModal: () => void;
}

const OdoMeterRightAccessory = () => {
  return <Icon size={iconSizes.medium} icon={icons.DropDownArrow} />;
};

export enum AddEntryFieldsKey {
  OdoMeter = 'OdoMeter',
  Gas = 'Gas',
  GasType = 'GasType',
  Price = 'Price',
  Cost = 'Cost',
  Date = 'Date',
  Time = 'Time',
}

export const AddEntryDesign: React.FC<Props> = ({closeModal}) => {
  const dispatch = useDispatch();
  const details = useRef<any>({
    [AddEntryFieldsKey.OdoMeter]: '',
    [AddEntryFieldsKey.Gas]: '',
    [AddEntryFieldsKey.GasType]: '',
    [AddEntryFieldsKey.Price]: '',
    [AddEntryFieldsKey.Cost]: '',
    [AddEntryFieldsKey.Date]: '',
    [AddEntryFieldsKey.Time]: '',
  });

  const [resetValues, _setResetValues] = useState<any>(false);

  const onOdoMeterChange = (text: string) =>
    updateValue(AddEntryFieldsKey.OdoMeter, text);

  const onGasChange = (text: string) =>
    updateValue(AddEntryFieldsKey.Gas, text);

  const onGasTypeChange = (text: string) =>
    updateValue(AddEntryFieldsKey.GasType, text);

  const onPricePerLiterChange = (text: string) =>
    updateValue(AddEntryFieldsKey.Price, text);

  const onCostChange = (text: string) =>
    updateValue(AddEntryFieldsKey.Cost, text);
  const onDateChange = (text: string) =>
    updateValue(AddEntryFieldsKey.Date, text);
  const onTimeChange = (text: string) =>
    updateValue(AddEntryFieldsKey.Time, text);

  const [componentList] = useState<RowInputProps[]>([
    {
      icon: icons.Meter,
      ChildOne: (
        <TextField
          keyboardType="number-pad"
          onChangeText={onOdoMeterChange}
          containerStyle={styles.odoMeter}
          placeholder={placeHolders.meter}
          helper="Last value: 66783 mi"
          RightAccessory={OdoMeterRightAccessory}
        />
      ),
    },
    {
      icon: icons.Gas,
      ChildOne: (
        <TextField
          keyboardType="number-pad"
          onChangeText={onGasChange}
          containerStyle={styles.fields}
          placeholder={placeHolders.gas}
        />
      ),
      ChildTwo: (
        <Picker
          list={gasTypeList}
          onSelect={onGasTypeChange}
          style={styles.fields}
          label={inputLabels.gasType}
        />
      ),
    },
    {
      icon: icons.Cost,
      ChildOne: (
        <TextField
          keyboardType="number-pad"
          onChangeText={onPricePerLiterChange}
          containerStyle={styles.fields}
          placeholder={placeHolders.price}
        />
      ),
      ChildTwo: (
        <TextField
          keyboardType="number-pad"
          onChangeText={onCostChange}
          containerStyle={styles.fields}
          placeholder={placeHolders.cost}
        />
      ),
    },
    {
      icon: icons.Calendar,
      ChildOne: (
        <DatePicker
          onSelect={onDateChange}
          style={styles.fields}
          type={DatePickerType.Date}
        />
      ),
      ChildTwo: (
        <DatePicker
          onSelect={onTimeChange}
          style={styles.fields}
          type={DatePickerType.Time}
        />
      ),
    },
  ]);

  const updateValue = (key: AddEntryFieldsKey, value: string) => {
    const newData = {...details.current};
    newData[key] = value;
    details.current = newData;
  };

  const onSave = () => {
    let date = getDayForTimeLine();

    const payload: TimeLineSectionItem = {
      meterReading: getCommaSeparatedValue(
        details?.current?.[AddEntryFieldsKey.OdoMeter] + '',
      ),
      gas: getCommaSeparatedValue(
        details?.current?.[AddEntryFieldsKey.Gas] + '',
      ),
      gasType: details?.current?.[AddEntryFieldsKey.GasType],
      price: getCommaSeparatedValue(
        details?.current?.[AddEntryFieldsKey.Price] + '',
      ),
      cost: getCommaSeparatedValue(
        details?.current?.[AddEntryFieldsKey.Cost] + '',
      ),
      date,
      time: details?.current?.[AddEntryFieldsKey.Time],
    };

    dispatch(MainActions.addEntryRequest(payload));
    closeModal?.();
  };

  const RightAction = (
    <Icon
      testID="HeaderSaveButton"
      onPress={onSave}
      color={colors.light}
      size={iconSizes.small}
      icon={icons.True}
    />
  );

  return (
    <View style={styles.container}>
      <HeaderBackNavigation
        title={'Refueling'}
        onLeftPress={closeModal}
        RightAction={RightAction}
      />
      <ComponentTree
        style={styles.componentTrees}
        key={resetValues}
        list={componentList}
      />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    backgroundColor: colors.primary,
  },
  odoMeter: {
    flex: 1,
  },
  fields: {
    width: '41%',
  },
  componentTrees: {
    paddingTop: spacing.vertical.medium,
  },
});
