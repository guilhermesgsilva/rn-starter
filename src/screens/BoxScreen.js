import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <>
      <View style={styles.titleView}>
        <Text style={styles.title}>Box Screen</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textTwo}>Child #2</Text>
        <Text style={styles.textThree}>Child #3</Text>
      </View>
      <View style={styles.exerciseViewParent}>
        <View style={styles.exerciseViewChildOne}></View>
        <View style={styles.exerciseViewChildTwo}></View>
        <View style={styles.exerciseViewChildThree}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleView: {
    borderWidth: 3,
    borderColor: "black",
  },
  title: {
    fontSize: 45,
    borderWidth: 10,
    borderColor: "red",
    margin: 20,
  },
  textView: {
    borderWidth: 3,
    borderColor: "black",
    /* flexDirection: "row", */
    height: 200,
    /* alignItems: "center", */
    /* justifyContent: "space-between", */
  },
  textOne: {
    borderWidth: 3,
    borderColor: "red",
    /* flex: 4, */
  },
  textTwo: {
    borderWidth: 3,
    borderColor: "green",
    /* flex: 4, */
    /* alignSelf: "flex-end", */
    /* position: "absolute", */
    fontSize: 18,
    top: 10,
    left: 10,
  },
  textThree: {
    borderWidth: 3,
    borderColor: "blue",
    /* flex: 2, */
    /* position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0, */
    ...StyleSheet.absoluteFillObject,
  },
  exerciseViewParent: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exerciseViewChildOne: {
    height: 50,
    width: 50,
    backgroundColor: "orange",
  },
  exerciseViewChildTwo: {
    height: 50,
    width: 50,
    backgroundColor: "pink",
    marginTop: 50,
  },
  exerciseViewChildThree: {
    height: 50,
    width: 50,
    backgroundColor: "brown",
  },
});

export default BoxScreen;
