import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  /* const [name, setName] = useState(""); */
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.title}>Text Screen</Text>
      {/* <Text style={styles.text}>Enter name:</Text> */}
      <Text style={styles.text}>Enter Password:</Text>
      {/* <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      /> */}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {/* <Text style={styles.text}>My name is: {name}</Text> */}
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  text: {
    fontSize: 30,
  },
  input: {
    fontSize: 30,
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
