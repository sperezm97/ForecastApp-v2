import { TextStyle } from 'react-native';

export interface Theme {
  colors: {
    orange: string;
    white: string;
    black: string;
    skyblue: string;
    yellowLight: string;
    skyblueLight: string;
    blue: string;
    red: string;
    blueLight: string;
    yellowDark: string;
    green: string;
    fuxia: string;
    purple: string;
    purpleDarker: string;
    greyDark: string;
    grey: string;
    greyLight: string;
    purpleDark: string;

    greenGradientStart: string;
    greenGradientEnd: string;

    lighblueGradientStart: string;
    lighblueGradientEnd: string;

    purpleGradientStart: string;
    purpleGradientEnd: string;
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
    bigTitle: TextStyle;
    title: TextStyle;
    subTiTle: TextStyle;
    header: TextStyle;
    body: TextStyle;
    caption: TextStyle;
    footnote: TextStyle;
  };
  globalStyles: {
    center: {
      justifyContent: string;
      alignItems: string;
    };
  };
}
