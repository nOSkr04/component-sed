import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { NavigationProp } from "@react-navigation/native";

export enum NavigationRoutes {
  HomeScreen = "HomeScreen",
  SecondScreen = "SecondScreen",
  TestSheet = "TestSheet",
}

export type RootStackParamList = {
  HomeScreen: undefined;
  SecondScreen: undefined;
};

export type BottomSheetParamList = {
  User_RootStackNavigator: undefined;
  TestSheet: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> =
  NativeStackScreenProps<BottomSheetParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends BottomSheetParamList {}
  }
}
