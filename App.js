// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View , styleSheet, scrollView} from 'react-native';





// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>CPRG 303 To Do List </Text>
//       <Text>This is fantastic app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  const todos = [
    { id: 1, text: 'attend class' },
    { id: 2, text: 'listening lecture' },
    { id: 3, text: 'doing assignment' },
  ];

  return (
    <View style={styles.container}>
      <ToDoForm />
      <ToDoList todos={todos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default App;

