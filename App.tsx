import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SWRConfig } from "swr";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "./src/navigation/navigation-container";

const App = () => {
  return (
    <SWRConfig>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </SWRConfig>
  );
};

export default App;

const styles = StyleSheet.create({});
