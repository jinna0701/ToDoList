import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.list}>
      {tasks.map(todo => (
        <Text key={todo.id} style={styles.item}>
          {todo.text}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ToDoList;