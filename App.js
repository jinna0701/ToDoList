 
"use client";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';



function App() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Do laundry' },
    { id: '2', text: 'Go to gym' },
    { id: '3', text: 'Walk dog' },
  ]);

  const Stack = createStackNavigator();


  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>

      <View style={styles.taskContainer}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={(newTask) => setTask([...tasks, newTask])} />
      </View>

      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    paddingTop: 50,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;