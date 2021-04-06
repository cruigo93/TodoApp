import React, { useState } from 'react';
import { Text, SafeAreaView, StatusBar, FlatList, View, TouchableOpacity } from 'react-native';
import TodoInput from "./components/TodoInput";

const App = () => {
  const [todoItems, setTodoItems] = useState(["Buy groceries", "Make blogpost"]);

  function addTodoItem(_text) {
    setTodoItems([...todoItems, _text]);
  }

  function deleteTodoItem(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr)
  }

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={"#212121"} />
      <SafeAreaView style={{ padding: 16 }}>
        <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Todo</Text>
        <FlatList
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{ paddingVertical: 8 }}
                onPress={() => {
                  deleteTodoItem(index);
                }}>
                <Text style={{ fontSize: 18 }}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
        <TodoInput onPress={addTodoItem} />
      </SafeAreaView>
    </>
  );
};

export default App;