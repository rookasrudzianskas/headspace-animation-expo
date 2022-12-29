import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

const examples = [
  {
    screen: "Headspace",
    title: "🟠 Headspace",
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: "white",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#f2f2f2",
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
  },
});

export const Examples = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {examples.map((thumbnail) => (
        <RectButton
          key={thumbnail.screen}
          onPress={() => navigate(thumbnail.screen)}
        >
          <View style={styles.thumbnail}>
            <Text style={styles.title}>{thumbnail.title}</Text>
          </View>
        </RectButton>
      ))}
    </ScrollView>
  );
};
