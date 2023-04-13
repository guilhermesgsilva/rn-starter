import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

// const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (
    <View>
      <Text style={styles.title}>Square Screen</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <ColorCounter
        title="Red"
        color={red}
        setColor={setRed}
        // onIncrease={() => setColor("red", COLOR_INCREMENT)}
        // onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        title="Green"
        color={green}
        setColor={setGreen}
        // onIncrease={() => setColor("green", COLOR_INCREMENT)}
        // onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        title="Blue"
        color={blue}
        setColor={setBlue}
        // onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        // onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
});

export default SquareScreen;
