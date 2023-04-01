import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ListScreen = () => {

  return (
    <View>
      <Text style={styles.title}>List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  
});

export default ListScreen;
