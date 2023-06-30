import React, { useCallback } from "react";
import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import { RootStackNavigator } from "./root-stack-navigator";
import { BottomSheetParamList, NavigationRoutes } from "./types";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeScreen } from "../screens/home-screen";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { TestSheets } from "../sheets/test-sheets";

const BottomSheet = createBottomSheetNavigator<BottomSheetParamList>();
const { Navigator, Screen } = BottomSheet;

const userBottomSheetRootStack = (insets: EdgeInsets) => {
  const SheetBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );
  return (
    <>
      <Screen
        name={NavigationRoutes.TestSheet}
        component={TestSheets}
        options={{
          backdropComponent: SheetBackdrop,
          snapPoints: [300],
          index: 1,
          topInset: insets.top,
        }}
      />
    </>
  );
};

const BottomSheetNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Navigator>
      <Screen name="User_RootStackNavigator" component={RootStackNavigator} />
      {userBottomSheetRootStack(insets)}
    </Navigator>
  );
};

export { BottomSheetNavigator, userBottomSheetRootStack };
