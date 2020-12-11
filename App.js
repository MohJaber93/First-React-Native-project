import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AddTodoControls from "./components/AddTodoControls/AddTodoControls";
import TodosList from "./components/TodosList";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const addNewTodo = (todo) => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: Math.random().toString(), value: todo },
    ]);
    setShowAddModal(false);
  };

  const deleteItem = (id) =>
    setTodoList((prevTodoList) =>
      prevTodoList.filter((item) => item.id !== id)
    );

  const closeAddModal = () => setShowAddModal(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Todo App</Text>
      <Button title="Add New Todo" onPress={() => setShowAddModal(true)} />
      <AddTodoControls
        addNewTodo={addNewTodo}
        showAddModal={showAddModal}
        closeAddModal={closeAddModal}
      />
      <TodosList todoList={todoList} deleteItem={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { color: "#fff", marginBottom: 10 },
  screen: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 40,
  },
});
