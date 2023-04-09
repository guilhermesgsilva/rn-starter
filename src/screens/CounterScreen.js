import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CounterScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Counter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
});

export default CounterScreen;
