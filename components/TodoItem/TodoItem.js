import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ title, deleteItem }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={deleteItem}>
      <View style={styles.todoItemContainer}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItemContainer: {
    backgroundColor: "#ccc",
    padding: 15,
    marginVertical: 5,
    borderWidth: 1.5,
    borderColor: "#eee",
  },
});

export default TodoItem;
