import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { updateStudent } from '../services/studentService';

export default function EditStudentScreen({ route, navigation }: any) {
  const { student } = route.params;
  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(String(student.age));
  const [course, setCourse] = useState(student.course);

  const handleUpdate = async () => {
    await updateStudent(student.id, { name, age: parseInt(age), course });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Student</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput style={styles.input} value={course} onChangeText={setCourse} />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#aaa', borderRadius: 5, padding: 10, marginVertical: 5 },
});
