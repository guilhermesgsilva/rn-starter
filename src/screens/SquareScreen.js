import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(`rgb(${red}, ${green}, ${blue})`)

  return (
    <View>
      <Text style={styles.title}>Square Screen</Text>
      <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
      <ColorCounter title="Red" color={red} setColor={setRed}/>
      <ColorCounter title="Green" color={green} setColor={setGreen}/>
      <ColorCounter title="Blue" color={blue} setColor={setBlue}/>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
});

export default SquareScreen;
