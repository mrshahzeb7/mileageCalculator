import {StyleSheet} from 'react-native';
import {responsiveFontSize, responsiveHeight} from '../utils';
import {colors} from './colors';

const borderRadius = {
  /**
   * 6 px
   */
  small: responsiveFontSize(1),

  /**
   * 10 px
   */
  medium: responsiveFontSize(1.3),

  /**
   * 15 px
   */
  large: responsiveFontSize(2),

  /**
   * 20+ px
   */
  extraLarge: responsiveFontSize(5),
};

const iconSizes = {
  /**
   * 10 px
   */

  micro: responsiveFontSize(1),

  /**
   * 15 px like verified Ticks
   */

  tiny: responsiveFontSize(1.97),

  /**
   * 20 px tiny
   */
  extraSmall: responsiveFontSize(2.62),

  /**
   * 25 px
   */
  small: responsiveFontSize(3.27),
  /**
   * 30px
   */
  medium: responsiveFontSize(4),

  /**
   * 40 px BottomTab,
   */
  large: responsiveFontSize(5.3),

  /**
   * 50 px
   */
  extralarge: responsiveFontSize(6.54),
};

const sizes = {
  /**
   * Button, TextInput
   */
  small: responsiveHeight(5),

  medium: responsiveHeight(6),
};

const styleGlobals = StyleSheet?.create({
  disabled: {
    opacity: 0.2,
  },

  hideElevation: {
    elevation: 0,
    shadowOpacity: 0,
  },
  elevation: {
    backgroundColor: colors.primary,
    elevation: 5,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,

    zIndex: 999,
  },

  lowElevation: {
    backgroundColor: colors.primary,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  headerElevation: {
    backgroundColor: colors.primary,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 1,
    elevation: 1,
  },

  listPaddingTop: {
    paddingTop: responsiveHeight(3.5),
  },

  listPaddingBottom: {
    paddingBottom: responsiveHeight(15),
  },

  border: {
    borderColor: colors.border,
    borderWidth: responsiveFontSize(0.1),
  },
});

export {borderRadius, iconSizes, sizes, styleGlobals};
