import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useCallback } from "react";
import { ArrowLeftIcon, Colors, PlusIcon } from "@goodtechsoft/xs-core-native";
import { useNavigation } from "@react-navigation/native";
import { TestItem } from "../../components/test-item";

const SecondScreen = memo(() => {
  const navigation = useNavigation();
  const DATA = Array.from({ length: 10 }, (_, index) => ({
    title: `Hi ${index + 1}`,
    image:
      "https://images.pexels.com/photos/17153107/pexels-photo-17153107/free-photo-of-fashion-woman-girl-cute.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    user: {
      name: `Name ${index + 1}`,
      avatar:
        "https://images.pexels.com/photos/17153107/pexels-photo-17153107/free-photo-of-fashion-woman-girl-cute.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    description: `Hello boys ${index + 1}`,
  }));

  const renderItem = useCallback(({ item }: { item: any }) => {
    return <TestItem item={item} />;
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftIcon size={30} color={Colors.primary} />
        </TouchableOpacity>
        <Text>Darhan</Text>
        <PlusIcon size={30} color={Colors.primary} />
      </View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
});

SecondScreen.displayName = "SecondScreen";

export { SecondScreen };

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
  },
});
