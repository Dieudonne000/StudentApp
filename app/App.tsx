import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddStudentScreen from './screens/AddStudentScreen';
import EditStudentScreen from './screens/EditStudentScreen';

export type RootStackParamList = {
  Home: undefined;
  AddStudent: undefined;
  EditStudent: { student: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddStudent" component={AddStudentScreen} />
        <Stack.Screen name="EditStudent" component={EditStudentScreen} />
      </Stack.Navigator>
  );
}
