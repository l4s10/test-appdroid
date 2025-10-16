import { Alert, ScrollView, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// Para app de lista de tareas
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]); // Hooks para tareas
  // Array de tareas: [{id: 1, text:'Tarea 1, completed: false}]
  const [newTask, setNewTask] = useState(''); // Texto del input para nueva tarea.
  // ?? En resumen: tasks = Array vacio (contenedor de tareas), newTask = String para el input

  // useEffect para cargar tareas desde AsyncStorage al iniciar
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error cargando tareas:', error);
      }
    };
    loadTasks();
  }, []);

  // useEffect para guardar tareas en AsyncStorage cada vez que cambian
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error guardando tareas:', error);
      }
    };
    saveTasks();
  }, [tasks]);

  /* ?? Función para agregar tareas.
    Donde ...tasks, se usa para copiar el array existente y agregar la nueva tarea
    Date now = agrega un ID unico
  */
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask(''); // Limpia el input
    }
  };

  //?? Función para marcar o eliminar tareas
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  //?? Para eliminar tareas
  const deleteTask = (id: number) => {
    Alert.alert('Eliminar', '¿Estás seguro?', [
      { text: 'Cancelar' },
      { text: 'Eliminar', onPress: () => setTasks(tasks.filter(task => task.id !== id)) },
    ]);
  };





  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: '#333' }}>Lista de Tareas</ThemedText>
      </ThemedView>

      {/* Formulario para tareas */}
      <ThemedView style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nueva tarea"
        placeholderTextColor={colorScheme === 'dark' ? '#aaa' : '#666'}
        value={newTask}
        onChangeText={setNewTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Ionicons name="add" size={20} color="white" />
        <ThemedText style={{ marginLeft: 8 }}>Agregar</ThemedText>
      </TouchableOpacity>
    </ThemedView>

    {/* Para mostrar la lista */}
    {tasks.map(task => (
      <ThemedView key={task.id} style={styles.taskContainer}>
        <TouchableOpacity onPress={() => toggleTask(task.id)} style={styles.taskTextContainer}>
          <Ionicons name={task.completed ? "checkmark-circle" : "ellipse-outline"} size={24} color={task.completed ? "green" : "#ccc"} />
          <ThemedText style={[task.completed ? styles.completed : null, { color: '#000' }]}>{task.text}</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <Ionicons name="trash" size={20} color="red" />
        </TouchableOpacity>
      </ThemedView>
    ))}


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#e6f7ff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#4a90e2',
    color: '#333',
    backgroundColor: '#fff',
    padding: 12,
    marginRight: 8,
    borderRadius: 12,
    fontSize: 16,
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 6,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  taskTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
    opacity: 0.7,
  },
  delete: {
    color: 'red',
  },

});
