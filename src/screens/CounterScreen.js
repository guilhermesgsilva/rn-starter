import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  // state === {count: number}
  // action === {type: 'increment' || 'decrement', payload: 1}

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return;
  }
};

const CounterScreen = () => {
  /* const [counter, setCounter] = useState(0); */
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text style={styles.title}>Counter Screen</Text>
      {/* <Text style={styles.message}>Current Count: {counter}</Text> */}
      {/* <Button title="Increase" onPress={() => setCounter(counter + 1)} /> */}
      {/* <Button title="Decrease" onPress={() => setCounter(counter - 1)} /> */}
      <Text style={styles.message}>Current Count: {state.count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  message: {
    fontSize: 30,
  },
});

export default CounterScreen;
