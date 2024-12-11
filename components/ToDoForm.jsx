// import React from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// const ToDoForm = () => {
//   return (
//     <View style={styles.form}>
//       <TextInput
//         style={styles.input}
//         placeholder="Add a new task"
//       />
//       <Button title="Add Task" onPress={() => {}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   form: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//   },
// });

// export default ToDoForm;



//this is for extra credit
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ onAddTask }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('./data/tasks.json');
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleAddTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setSelectedTask(tasks[randomIndex].task);
      onAddTask(tasks[randomIndex].task);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={selectedTask}
        placeholder="Generated Task"
        editable={false}
      />
      <Button title="Generate Random Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default ToDoForm;
