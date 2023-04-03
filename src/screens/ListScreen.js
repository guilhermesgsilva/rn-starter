import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
    { name: "Dave", age: 27 },
    { name: "Emily", age: 26 },
    { name: "Frank", age: 31 },
    { name: "Grace", age: 29 },
    { name: "Henry", age: 24 },
    { name: "Isabella", age: 23 },
    { name: "Jack", age: 32 },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>List Screen</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        data={friends}
        renderItem={({ item, index }) => {
          // element === {item: {name: "Alice"}, index: 0}
          return (
            <Text style={styles.listItem}>
              {item.name} - {item.age} years old
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  listItem: {
    paddingVertical: 50,
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
  },
});

export default ListScreen;
