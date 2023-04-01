import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "Dave" },
    { name: "Emily" },
    { name: "Frank" },
    { name: "Grace" },
    { name: "Henry" },
    { name: "Isabella" },
    { name: "Jack" },
  ];

  return (
    <View>
      <Text style={styles.title}>List Screen</Text>
      <FlatList
        keyExtractor={(item) => item.name}
        data={friends}
        renderItem={({ item, index }) => {
          // element === {item: {name: "Alice"}, index: 0}
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});

export default ListScreen;
