// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import {responsiveFontSize} from '../utils';

export const fontSize = {
  extraTiny: responsiveFontSize(1.15), // 10 TODO: remove it

  tiny: responsiveFontSize(1.15), // 10 TODO: remove it

  /**
   * 10 px
   */
  extraSmall: responsiveFontSize(1.31),

  /**
   * 14 px
   */
  small: responsiveFontSize(1.5),

  /**
   * 16 px
   */
  medium: responsiveFontSize(1.8),

  /**
   * 18 px
   */
  large: responsiveFontSize(2.06),
  /**
   * 22px
   */
  xLarge: responsiveFontSize(2.47),
  /**
   * 25px
   */
  extraLarge: responsiveFontSize(2.97),

  /**
   * 30
   */
  extraLarge1: responsiveFontSize(3.63),

  /**
   * 36
   */
  extraLarge2: responsiveFontSize(4.41),

  /**
   * 60 px
   */
  huge: responsiveFontSize(7.55),
};
