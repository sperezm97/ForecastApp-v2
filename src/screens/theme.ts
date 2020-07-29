import { Dimensions } from 'react-native';
import { Theme } from '../types/Theme';

const colors = {
  primaryColorDark: '',
  primaryColor: '#DB8F17',
  primaryColorLight: ' ',
  secondaryColorDark: '',
  secondaryColor: '#514538',
  secondaryColorLight: '',
  accentColor: '',

  grayDark: '#9d9999',
  gray: '#b4b4b4',
  grayLight: '##d3d3d3',

  danger: '',
  success: '',
  caution: '',

  text: '#B8A99A',
  icons: '',
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
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: colors.text,
  },
  subTiTle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 21,
    color: colors.text,
  },
  header: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: colors.text,
  },
  body: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: colors.text,
  },
  caption: {
    fontFamily: 'Poppins_300Light',
    fontSize: 12,
    color: colors.text,
  },
  footnote: {
    fontFamily: 'Poppins_300Light',
    fontSize: 10,
    color: colors.text,
  },
};

const theme: Theme = {
  colors,
  layout,
  spacing,
  fonts,
};

export default theme;
