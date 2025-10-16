import { Linking, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer} lightColor="transparent" darkColor="transparent">
        <ThemedText type="title" style={{ color: '#333' }}>Acerca de la App</ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>
        Esta es una aplicación de lista de tareas creada con React Native y Expo. Desarrollada por Francisco Muñoz, un apasionado programador de aplicaciones web y móviles.
      </ThemedText>
      <ThemedView style={styles.section} lightColor="transparent" darkColor="transparent">
        <ThemedText type="subtitle" style={{ color: '#4a90e2' }}>Características</ThemedText>
        <ThemedView style={styles.list} lightColor="transparent" darkColor="transparent">
          <ThemedView style={styles.listItem} lightColor="transparent" darkColor="transparent">
            <Ionicons name="checkmark-circle" size={16} color="#4a90e2" />
            <ThemedText style={styles.listText}>Agregar, marcar como completadas y eliminar tareas fácilmente.</ThemedText>
          </ThemedView>
          <ThemedView style={styles.listItem} lightColor="transparent" darkColor="transparent">
            <Ionicons name="checkmark-circle" size={16} color="#4a90e2" />
            <ThemedText style={styles.listText}>Persistencia de datos local con AsyncStorage.</ThemedText>
          </ThemedView>
          <ThemedView style={styles.listItem} lightColor="transparent" darkColor="transparent">
            <Ionicons name="checkmark-circle" size={16} color="#4a90e2" />
            <ThemedText style={styles.listText}>Interfaz intuitiva y moderna.</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section} lightColor="transparent" darkColor="transparent">
        <ThemedText type="subtitle" style={{ color: '#4a90e2' }}>Tecnologías Usadas</ThemedText>
        <ThemedView style={styles.list} lightColor="transparent" darkColor="transparent">
          <ThemedView style={styles.listItem} lightColor="transparent" darkColor="transparent">
            <Ionicons name="logo-react" size={16} color="#61dafb" />
            <ThemedText style={styles.listText}>React Native con Expo</ThemedText>
          </ThemedView>
          <ThemedView style={styles.listItem} lightColor="transparent" darkColor="transparent">
            <Ionicons name="code-slash" size={16} color="#3178c6" />
            <ThemedText style={styles.listText}>TypeScript para tipado fuerte</ThemedText>
          </ThemedView>
          <ThemedView style={styles.listItem} lightColor="transparent" darkColor="transparent">
            <Ionicons name="save" size={16} color="#ff6b35" />
            <ThemedText style={styles.listText}>AsyncStorage para almacenamiento local</ThemedText>
          </ThemedView>
          <ThemedView style={styles.listItem} lightColor="transparent" darkColor="transparent">
            <Ionicons name="heart" size={16} color="#e91e63" />
            <ThemedText style={styles.listText}>Ionicons para íconos</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section} lightColor="transparent" darkColor="transparent">
        <ThemedText type="subtitle" style={{ color: '#4a90e2' }}>Contacto</ThemedText>
        <ThemedText style={styles.text}>
          ¿Interesado en una app personalizada? Contáctame para discutir tu proyecto.
        </ThemedText>
        <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('mailto:franciscomunoz142@gmail.com')}>
          <Ionicons name="mail" size={20} color="white" />
          <ThemedText style={{ color: 'white', marginLeft: 8 }}>Enviar Email</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('https://www.linkedin.com/in/franciscomv2001dev/')}>
          <Ionicons name="logo-linkedin" size={20} color="white" />
          <ThemedText style={{ color: 'white', marginLeft: 8 }}>LinkedIn</ThemedText>
        </TouchableOpacity>
      </ThemedView>
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
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 24,
    backgroundColor: 'Transparent',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  list: {
    marginTop: 8,
    backgroundColor: 'Transparent',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'Transparent',
  },
  listText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});
