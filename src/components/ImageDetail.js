import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{score} Votes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});

export default ImageDetail;
