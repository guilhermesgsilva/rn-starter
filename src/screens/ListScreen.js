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
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        data={friends}
        renderItem={({ item, index }) => {
          // element === {item: {name: "Alice"}, index: 0}
          return <Text style={styles.listItem}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  listItem: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
});

export default ListScreen;
