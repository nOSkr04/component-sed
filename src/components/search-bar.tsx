import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { memo, useState } from "react";
import { Image } from "expo-image";
const SearchBar = memo(() => {
  const [my, setMy] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Lol"
        value={my}
        onChangeText={setMy}
        style={{ padding: 10 }}
      />
    </View>
  );
});

SearchBar.displayName = "SearchBar";

export { SearchBar };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  image: {
    borderRadius: 12,
    width: 96,
    height: 96,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },
});
