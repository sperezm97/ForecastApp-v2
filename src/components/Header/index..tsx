import React from 'react';
import { StyleSheet, Text, View, ViewStyle, FlexStyle } from 'react-native';
import theme from '../../screens/theme';

interface Header {
  left?: React.ReactNode[] | React.ReactNode;
  children?: React.ReactNode[] | React.ReactNode;
  right?: React.ReactNode[] | React.ReactNode;
}

type Styles = {
  container: ViewStyle & FlexStyle;
  left: ViewStyle & FlexStyle;
  body: ViewStyle & FlexStyle;
  right: ViewStyle & FlexStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    height: 50,
  },
  body: {
    ...theme.globalStyles.center,
    flexGrow: 3,
  },
  left: {
    ...theme.globalStyles.center,
    flexShrink: 1,
  },
  right: {
    ...theme.globalStyles.center,
    flexShrink: 1,
  },
});

export default function Header(props: Header): React.ReactElement {
  const { left, children, right } = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>{left}</View>
      <View style={styles.body}>{children}</View>
      <View style={styles.right}>{right}</View>
    </View>
  );
}
