import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddStudentScreen from './screens/AddStudentScreen';
import EditStudentScreen from './screens/EditStudentScreen';
import { setupDatabase } from '../db/database';

export type RootStackParamList = {
  Home: undefined;
  AddStudent: undefined;
  EditStudent: { student: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    setupDatabase();
  }, []);

  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddStudent" component={AddStudentScreen} />
        <Stack.Screen name="EditStudent" component={EditStudentScreen} />
      </Stack.Navigator>
  );
}
