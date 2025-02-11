import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    navigation.navigate('Formulario', { setTasks, tasks });
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Button title="Agregar Tarea" onPress={addTask} />
      <FlatList
        data={tasks.filter(task => !task.completed)}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => toggleCompleted(index)}>
            <Text>{item.completed ? 'Completada' : 'Pendiente'}</Text>
            </TouchableOpacity>
            <Button title="Eliminar" onPress={() => deleteTask(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;
