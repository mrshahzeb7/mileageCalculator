import {Dimensions} from 'react-native';

const percentageCalculation = (max: number, val: number) => max * (val / 100);

const fontCalculation = (height: number, width: number, val: number) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
    ),
    val,
  );
};

export const responsiveHeight = (h: number) => {
  const {height} = Dimensions.get('window');
  return percentageCalculation(height, h);
};

export const responsiveWidth = (w: number) => {
  const {width} = Dimensions.get('window');
  return percentageCalculation(width, w);
};

export const responsiveFontSize = (f: number) => {
  const {height, width} = Dimensions.get('window');
  return fontCalculation(height, width, f);
};
