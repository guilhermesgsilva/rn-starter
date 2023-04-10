import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.title}>Counter Screen</Text>
      <Text style={styles.message}>Current Count: {counter}</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  message: {
    fontSize: 30,
  },
});

export default CounterScreen;
