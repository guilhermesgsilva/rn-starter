import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const COLOR_INCREMENT = 15;

const ColorCounter = ({ title, color, setColor }) => {
  const handleIncrease = () => {
    if (color + COLOR_INCREMENT > 255) {
      setColor(255);
      return;
    }
    setColor(color + COLOR_INCREMENT);
  };

  const handleDecrease = () => {
    if (color - COLOR_INCREMENT < 0) {
      setColor(0);
      return;
    }
    setColor(color - COLOR_INCREMENT);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Button title={`Increase ${title}`} onPress={handleIncrease} />
      <Button title={`Decrease ${title}`} onPress={handleDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});

export default ColorCounter;
