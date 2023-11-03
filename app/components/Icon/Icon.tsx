import * as React from 'react';
import {ComponentType} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: ImageSourcePropType;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps['onPress'];
}

export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props;

  const isPressable = !!WrapperProps.onPress;

  // @ts-ignore
  const Wrapper: ComponentType<TouchableOpacityProps | ViewProps> =
    WrapperProps?.onPress ? TouchableOpacity : View;

  const $imageCombineStyle: StyleProp<ImageStyle> = [
    $imageStyle,
    color ? {tintColor: color} : null,
    size ? {width: size, height: size} : null,
    $imageStyleOverride,
  ];

  return (
    <Wrapper
      accessibilityRole={isPressable ? 'imagebutton' : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}>
      <Image style={$imageCombineStyle} source={icon} />
    </Wrapper>
  );
}

const $imageStyle: ImageStyle = {
  resizeMode: 'contain',
};
