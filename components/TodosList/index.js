import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TodoItem from "../TodoItem/TodoItem";

const TodosList = ({ todoList, deleteItem }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todoList}
        renderItem={(itemData) => (
          <TodoItem
            title={itemData.item.value}
            deleteItem={() => deleteItem(itemData.item.id)}
          />
        )}
      />
    </View>
  );
};

// scroll view used for list i know how many items in there
// but the above FlatList used for infinity items and for performance optmization
// as it just render the viewed items
{
  /* <ScrollView style={{ width: "100%", marginTop: 10 }}>
        {todoList.map((todoItem, i) => {
          return (
            <View key={`${todoItem}-${i}`} style={styles.todoItemContainer}>
              <Text>{todoItem}</Text>
            </View>
          );
        })}
      </ScrollView> */
}

const styles = StyleSheet.create({
  listContainer: { width: "100%", height: "90%", marginTop: 10 },
});

export default TodosList;
