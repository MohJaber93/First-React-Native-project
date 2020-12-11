import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const AddTodoControls = ({ addNewTodo, showAddModal, closeAddModal }) => {
  const [todo, setTodo] = useState("");

  const submitAddition = () => {
    addNewTodo(todo);
    setTodo("");
  };

  return (
    <Modal visible={showAddModal} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="write somthing"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={(value) => setTodo(value)}
          value={todo}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={closeAddModal} />
          </View>
          <View style={styles.button}>
            <Button title="Submit" onPress={submitAddition} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    flex: 1,
  },
  input: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    width: "80%",
    padding: 10,
    color: "#fff",
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  button: {
    width: "45%",
  },
});

export default AddTodoControls;
