import React, {ComponentType, Ref, forwardRef, useRef} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps as TextInputPropsType,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {borderRadius, colors, fontSize, sizes, spacing} from '../../theme';
import {responsiveHeight} from '../../utils';
import {Label} from '../Label/Label';

export interface ValidatedInputType {
  isValid: boolean;
  value: string;
}

export type onChangeValidatedInputType = (data: ValidatedInputType) => void;

export interface TextFieldProps extends Omit<TextInputPropsType, 'ref'> {
  label?: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  RightAccessory?: ComponentType<any>;
  LeftAccessory?: ComponentType<any>;
  helper?: string;
}

export const TextField = forwardRef(function TextField(
  props: TextFieldProps,
  ref: Ref<TextInput>,
) {
  const {
    label,
    placeholder,
    RightAccessory,
    LeftAccessory,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    helper,
    ...TextInputProps
  } = props;

  const disabled = TextInputProps.editable === false;

  const $containerStyles = [$containerStyleOverride];

  const $inputWrapperStyles = [
    styles.inputWrapperStyle,
    LeftAccessory && {paddingStart: 0},
    RightAccessory && {paddingEnd: 0},
    $inputWrapperStyleOverride,
  ];

  const $inputStyles: StyleProp<ViewStyle> = [
    styles.inputStyle,
    TextInputProps.multiline && {height: 'auto'},
    $inputStyleOverride,
  ];

  return (
    <View style={$containerStyles}>
      <Label label={label} />

      <View style={$inputWrapperStyles}>
        {!!LeftAccessory && <LeftAccessory />}

        <TextInput
          {...(disabled ? {pointerEvents: 'none'} : null)}
          ref={ref}
          underlineColorAndroid={colors.transparent}
          textAlignVertical="top"
          placeholder={placeholder}
          placeholderTextColor={colors.textDim}
          maxLength={props.maxLength || 30}
          {...TextInputProps}
          editable={!disabled}
          style={$inputStyles}
        />

        {!!RightAccessory && <RightAccessory />}
      </View>
      {!!helper && <Text style={styles.helper}>{helper}</Text>}
    </View>
  );
});

export function useTextFieldRef() {
  const textFieldRef = useRef<TextInput>(null);
  return textFieldRef;
}

const styles = StyleSheet.create({
  inputWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: responsiveHeight(0.1),
    height: sizes.medium,
    borderColor: colors.border,
    overflow: 'hidden',
    borderRadius: borderRadius.small,
  },

  inputStyle: {
    flex: 1,
    alignSelf: 'stretch',
    color: colors.text,
    fontSize: fontSize.medium,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: spacing.horizontal.medium,
    textAlignVertical: 'center',
  },
  helper: {
    marginLeft: spacing.horizontal.medium,
    fontSize: fontSize.small,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.horizontal.tiny,
    color: colors.textDim,
  },
});
