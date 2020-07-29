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
