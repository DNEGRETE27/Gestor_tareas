import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';

const Formulario = ({ route, navigation }) => {
  const { setTasks, tasks, taskIndex } = route.params || {};
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (taskIndex !== undefined) {
      setTaskText(tasks[taskIndex].text);
    }
  }, [taskIndex]);

  const handleSubmit = () => {
    if (taskIndex !== undefined) {
      const updatedTasks = tasks.map((task, i) =>
        i === taskIndex ? { ...task, text: taskText } : task
      );
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, { text: taskText, completed: false }]);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu tarea"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Guardar" onPress={handleSubmit} />
    </View>
  );
};

export default Formulario;
