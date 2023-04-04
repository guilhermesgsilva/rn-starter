import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Image Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
});

export default ImageScreen;
