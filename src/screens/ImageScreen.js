import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const forestImg = require('../../assets/forest.jpg');
const beachImg = require('../../assets/beach.jpg');
const mountainImg = require('../../assets/mountain.jpg');

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Image Screen</Text>
      <ImageDetail image={forestImg} title="Forest" score={9}/>
      <ImageDetail image={beachImg} title="Beach" score={5}/>
      <ImageDetail image={mountainImg} title="Mountain" score={7}/>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
});

export default ImageScreen;
