import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import { Image } from "expo-image";
import {
  CommentIcon,
  LikeIcon,
  SettingIcon,
} from "@goodtechsoft/xs-core-native";

const { width } = Dimensions.get("window");

const TestItem = memo(({ item }: { item: any }) => {
  return (
    <View style={styles.root}>
      <View style={styles.height} />
      <View style={styles.userContainer}>
        <Image source={item.user.avatar} style={styles.userAvatar} />
        <View style={styles.nameContainer}>
          <Text style={styles.username} numberOfLines={1}>
            {item.user.name}
          </Text>
          <Text style={styles.time}>2022.02.01</Text>
        </View>
        <TouchableOpacity style={styles.tripleIcon}>
          <SettingIcon size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.height} />
      <Image source={item.image} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.actionRoot}>
        <View style={styles.actionContainer}>
          <LikeIcon size={24} color={"red"} />
          <Text style={styles.actionText}>4</Text>
        </View>
        <View style={styles.actionContainer}>
          <CommentIcon size={24} color={"red"} />
          <Text style={styles.actionText}>4</Text>
        </View>
      </View>
      <View style={styles.height} />
    </View>
  );
});

TestItem.displayName = "TestItem";

export { TestItem };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 18,
  },
  image: {
    width: width * 0.9,
    height: 200,
    borderRadius: 24,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 12,
  },
  nameContainer: {
    marginLeft: 12,
    flex: 0.8,
  },
  username: {
    fontSize: 16,
    fontWeight: "500",
  },
  time: {
    fontSize: 12,
    fontWeight: "400",
  },
  border: {
    borderWidth: 1,
    color: "gray",
  },
  height: {
    height: 12,
  },
  description: {
    fontWeight: "400",
    marginTop: 6,
    marginBottom: 12,
  },
  actionRoot: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.49,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#cccccccc",
    paddingVertical: 8,
    borderRadius: 12,
  },
  actionText: {
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 8,
  },
  tripleIcon: {},
});
