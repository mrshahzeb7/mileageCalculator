import {responsiveFontSize, responsiveHeight, responsiveWidth} from '../utils';

/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  /**
   * 1 height
   */
  tiny: responsiveFontSize(1),
  /**
   * 2 height
   */
  small: responsiveFontSize(2),
  /**
   * 5 height
   */
  medium: responsiveFontSize(5),
  /**
   * 10 height
   */
  large: responsiveFontSize(10),

  vertical: {
    /**
     * 1 height
     */
    tiny: responsiveHeight(1),
    /**
     * 2 height
     */
    small: responsiveHeight(2),
    /**
     * 5 height
     */
    medium: responsiveHeight(5),
    /**
     * 10 height
     */
    large: responsiveHeight(10),
  },
  horizontal: {
    /**
     * 1 width
     */
    tiny: responsiveWidth(1),
    /**
     * 2 width
     */
    small: responsiveWidth(2),
    /**
     * 5 width
     */
    medium: responsiveWidth(5),
    /**
     * 10 width
     */
    large: responsiveWidth(10),

    /**
     * 15 width
     */
    extraLarge: responsiveWidth(15),
  },
} as const;

export type Spacing = keyof typeof spacing;
