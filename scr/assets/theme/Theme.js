import { Platform } from 'react-native';

export const COLORS = {
  white: '#FFFFFF',
  aquaticBlue: '#21C3E7',
  black: '#000000',
  charcoalGrey: '#4C4C4C',
  errorColor: '#FF453C',
  slateGray: '#6E6E6E',
  lightSkyBlue: '#EEF3F7', //#616568
  dimGray: '#616568',
  lightGray: '#F2F2F2',
  steelGray: '#8C8C8C',
  softGray: '#E0DFDC',
  AshGray: '#848484',
  WhisperGray: '#E8E8E8',
  green: '#057642',
  Silver: '#E7E7E7',
  darkGray: '#8D8D8D',
  FrostedGray: '#E9E9E9',
  lightBlue: '#E8FBFF',
  orange: '#ff9800',
  lightGreen: '#8bc34a',
};

export const FONTS = {
  GilroyRegularItalic400: Platform.select({
    android: 'Gilroy-RegularItalic',
    ios: 'Gilroy-RegularItalic',
  }),
  GilroyRegular400: Platform.select({
    android: 'Gilroy-Regular',
    ios: 'Gilroy-Regular',
  }),
  GilroyMedium500: Platform.select({
    android: 'Gilroy-Medium',
    ios: 'Gilroy-Medium',
  }),
  GilroyMediumItalic500: Platform.select({
    android: 'Gilroy-MediumItalic',
    ios: 'Gilroy-MediumItalic',
  }),
  GilroySemiBold600: Platform.select({
    android: 'Gilroy-SemiBold',
    ios: 'Gilroy-SemiBold',
  }),
  GilroyBold700: Platform.select({
    android: 'Gilroy-Bold',
    ios: 'Gilroy-Bold',
  }),
  GilroyExtraBold800: Platform.select({
    android: 'Gilroy-ExtraBold',
    ios: 'Gilroy-ExtraBold',
  }),
  GilroyBlack900: Platform.select({
    android: 'Gilroy-Black',
    ios: 'Gilroy-Black',
  }),
  PlusJakartaSansFont: Platform.select({
    android: 'PlusJakartaSans-VariableFont_wght',
    ios: 'PlusJakartaSans-VariableFont_wght',
  }),

  // plus jakarta
  PlusJakartaSansRegular400: Platform.select({
    android: 'PlusJakartaSans-Regular',
    ios: 'PlusJakartaSans-Regular',
  }),
  PlusJakartaSansMedium500: Platform.select({
    android: 'PlusJakartaSans-Medium',
    ios: 'PlusJakartaSans-Medium',
  }),
  PlusJakartaSansMediumItalic500: Platform.select({
    android: 'PlusJakartaSans-MediumItalic',
    ios: 'PlusJakartaSans-MediumItalic',
  }),
  PlusJakartaSansSemiBold600: Platform.select({
    android: 'PlusJakartaSans-SemiBold',
    ios: 'PlusJakartaSans-SemiBold',
  }),
  PlusJakartaSansBold700: Platform.select({
    android: 'PlusJakartaSans-Bold',
    ios: 'PlusJakartaSans-Bold',
  }),
  PlusJakartaSansExtraBold800: Platform.select({
    android: 'PlusJakartaSans-ExtraBold',
    ios: 'PlusJakartaSans-ExtraBold',
  }),
  PlusJakartaSansFont: Platform.select({
    android: 'PlusJakartaSans-VariableFont_wght',
    ios: 'PlusJakartaSans-VariableFont_wght',
  }),

  InterVarFont: Platform.select({
    android: 'Inter-VariableFont_slnt,wght',
    ios: 'Inter-VariableFont_slnt,wght',
  }),
};

const appTheme = { COLORS, FONTS };

export default appTheme;
