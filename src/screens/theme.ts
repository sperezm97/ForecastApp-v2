import { Dimensions } from 'react-native';
import { Theme } from '../types/Theme';

const colors = {
  orange: '#EF880D',
  white: '#FFFFFF',
  black: '#0B0505',
  skyblue: '#C5E6EE',
  yellowLight: '#FFEF69',
  skyblueLight: '#D2ECFC',
  blue: '#0051FF',
  red: '#DC0000',
  blueLight: '#0090FF',
  yellowDark: '#FFAE00',
  green: '#28E0AE',
  fuxia: '#FF0090',
  purple: '#5C2AFF',
  purpleDarker: '#130E51',
  greyDark: '#BBC0D4',
  grey: '#EDF2F6',
  greyLight: '#EDF0F5',
  purpleDark: '#5D50FE',

  greenGradientStart: '#28E0AE',
  greenGradientEnd: '#00FFBA',

  lighblueGradientStart: '#A3CCE3',
  lighblueGradientEnd: '#A3CCE3',

  purpleGradientStart: '#5D50FE',
  purpleGradientEnd: '#8572FC',
};

const layout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const spacing = {
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 24,
};

const fonts = {
  bigTitle: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 120,
    lineHeight: 144,
    color: colors.white,
  },
  subBigTitle: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 61,
    lineHeight: 73,
    color: colors.white,
  },
  day: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 47,
    lineHeight: 56,
    color: colors.white,
  },
  temp: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 30,
    lineHeight: 36,
    color: colors.white,
  },
  temp2: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 30,
    lineHeight: 36,
    color: colors.white,
    opacity: '50%',
  },
  hour: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 23,
    lineHeight: 28,
    color: colors.white,
  },
  title: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: colors.black,
  },
  subTitle: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 19,
    lineHeight: 23,
    color: colors.black,
  },
  tempSmall: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 19,
    lineHeight: 23,
    color: colors.black,
  },
  hourSmall: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 14,
    lineHeight: 17,
    color: colors.black,
  },
  header: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 17,
    lineHeight: 20,
    color: colors.black,
  },
  body: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 15,
    lineHeight: 18,
    color: colors.purpleDark,
  },
  caption: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 14,
    lineHeight: 17,
    color: colors.white,
  },
  footnote: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
  },
};

const globalStyles = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const theme: Theme = {
  colors,
  layout,
  spacing,
  fonts,
  globalStyles,
};

export default theme;
