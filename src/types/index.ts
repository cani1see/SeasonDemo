import {StackScreenProps} from '@react-navigation/stack';
import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  default: undefined;
  HomeScreen: undefined;
  DetailScreen: ListItem;
};

export type DefaultNavigationProps<
  T extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, T>;

export type ListItem = {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
  tintColor: string;
  discount?: string;
};
