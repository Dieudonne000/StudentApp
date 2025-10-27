import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getStudents, deleteStudent } from '../services/studentService';

export default function HomeScreen({ navigation }: any) {
  const [students, setStudents] = useState<any[]>([]);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchStudents);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student List</Text>
      <Button title="Add Student" onPress={() => navigation.navigate('AddStudent')} />

      <FlatList
        data={students}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.age} - {item.course}</Text>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => navigation.navigate('EditStudent', { student: item })} />
              <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 10, borderWidth: 1, borderColor: '#aaa', borderRadius: 5, marginVertical: 5 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
});
