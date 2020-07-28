import { Dimensions } from 'react-native';

export interface Theme {
  colors: {
    primaryColorDark: string;
    primaryColor: string;
    primaryColorLight: string;
    secondaryColorDark: string;
    secondaryColor: string;
    secondaryColorLight: string;
    accentColor: string;

    grayDark: string;
    gray: string;
    grayLight: string;

    danger: string;
    success: string;
    caution: string;

    text: string;
    icons: string;
  };
  layout: {
    width: number;
    height: number;
  };
  spacing: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  fonts: {
    title: {
      fontFamily: string;
      fontSize: number;
      color: string;
    };
    subTiTle: {
      fontFamily: string;
      fontSize: number;
      color: string;
    };
    header: {
      fontFamily: string;
      fontSize: number;
      color: string;
    };
    body: {
      fontFamily: string;
      fontSize: number;
      color: string;
    };
    caption: {
      fontFamily: string;
      fontSize: number;
      color: string;
    };
    footnote: {
      fontFamily: string;
      fontSize: number;
      color: string;
    };
  };
}
const colors = {
  primaryColorDark: '',
  primaryColor: '',
  primaryColorLight: ' ',
  secondaryColorDark: '',
  secondaryColor: '',
  secondaryColorLight: '',
  accentColor: '',

  grayDark: '',
  gray: '',
  grayLight: '',

  danger: '',
  success: '',
  caution: '',

  text: '',
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
