import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Color Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
});

export default ColorScreen;
