import * as SQLite from 'expo-sqlite';

export type Student = {
  id: number;
  name: string;
  age: number;
  course: string;
};



const db = SQLite.openDatabaseSync('students.db');

export const setupDatabase = () => {
  try {
    db.execSync(
      `CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        course TEXT
      );`
    );
  } catch (error) {
    console.error('Error setting up database:', error);
  }
};

export const addStudent = (name: string, age: number, course: string, callback: (success: boolean) => void) => {
  try {
    const statement = db.prepareSync('INSERT INTO students (name, age, course) VALUES (?, ?, ?)');
    statement.executeSync([name, age, course]);
    statement.finalizeSync();
    callback(true);
  } catch (error) {
    console.error('Error adding student:', error);
    callback(false);
  }
};

export const getStudents = (callback: (students: Student[]) => void) => {
  try {
    const result = db.getAllSync('SELECT * FROM students') as Student[];
    callback(result);
  } catch (error) {
    console.error('Error getting students:', error);
    callback([]);
  }
};

export const updateStudent = (id: number, name: string, age: number, course: string, callback: (success: boolean) => void) => {
  try {
    const statement = db.prepareSync('UPDATE students SET name = ?, age = ?, course = ? WHERE id = ?');
    statement.executeSync([name, age, course, id]);
    statement.finalizeSync();
    callback(true);
  } catch (error) {
    console.error('Error updating student:', error);
    callback(false);
  }
};

export const deleteStudent = (id: number, callback: (success: boolean) => void) => {
  try {
    const statement = db.prepareSync('DELETE FROM students WHERE id = ?');
    statement.executeSync([id]);
    statement.finalizeSync();
    callback(true);
  } catch (error) {
    console.error('Error deleting student:', error);
    callback(false);
  }
};
