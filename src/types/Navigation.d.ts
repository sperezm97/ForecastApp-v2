import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AppParamList = {
  Home: undefined;
  Search: undefined;
};
// Stacks
type HomeScreenNavigationProp = StackNavigationProp<AppParamList, 'Home'>;
type SearchScreenNavigationProp = StackNavigationProp<AppParamList, 'Search'>;

// Routes
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;

export type NavigationProps = HomeScreenNavigationProp & SearchScreenNavigationProp;
export type RouteProps = HomeScreenRouteProp & SearchScreenRouteProp;
