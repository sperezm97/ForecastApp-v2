import React from 'react';
import theme, { Theme as ITheme } from '../screens/theme';

const Theme = React.createContext<ITheme | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <Theme.Provider value={theme}>{children}</Theme.Provider>;
}

export default function userTheme() {
  return React.useContext<ITheme>(Theme);
}
