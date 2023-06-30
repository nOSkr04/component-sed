import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Image } from "expo-image";
const MaxItem = memo(({ title, image }: { title: string; image: string }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});

MaxItem.displayName = "MaxItem";

export { MaxItem };

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
