import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

const TestSheets = memo(() => {
  return (
    <View>
      <Text>TestSheets</Text>
    </View>
  );
});

TestSheets.displayName = "TestSheets";

export { TestSheets };

const styles = StyleSheet.create({});
