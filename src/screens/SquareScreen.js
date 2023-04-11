import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SquareScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Square Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
});

export default SquareScreen;
