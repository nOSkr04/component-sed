import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { memo, useCallback, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { MaxItem } from "../components/max-item";
import { SearchBar } from "../components/search-bar";

const HomeScreen = memo(() => {
  const [my, setMy] = useState("");
  const DATA = Array.from({ length: 10000 }, (_, index) => ({
    title: `Item ${index + 1}`,
    image: `https://images.pexels.com/photos/17153107/pexels-photo-17153107/free-photo-of-fashion-woman-girl-cute.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
  }));

  const renderItem = useCallback(
    ({ item }: { item: { title: string; image: string } }) => {
      return <MaxItem title={item.title} image={item.image} />;
    },
    []
  );

  const renderHeader = useCallback(() => {
    return (
      <>
        <SearchBar />
      </>
    );
  }, []);
  console.log(my);
  return (
    <FlashList
      data={DATA}
      renderItem={renderItem}
      estimatedItemSize={96}
      contentContainerStyle={styles.root}
      ListHeaderComponent={renderHeader}
    />
  );
});

HomeScreen.displayName = "HomeScreen";

export { HomeScreen };

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
  },
});
