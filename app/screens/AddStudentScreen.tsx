import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addStudent } from '../../db/database';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  AddStudent: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'AddStudent'>;

export default function AddStudentScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = () => {
    if (!name || !age || !course) return;
    addStudent(name, parseInt(age), course, success => {
      if (success) {
        setName('');
        setAge('');
        setCourse('');
        navigation.goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Student</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Course" value={course} onChangeText={setCourse} />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});
