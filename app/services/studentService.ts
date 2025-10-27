import { API_URL } from "../config/api";

export async function getStudents() {
  const res = await fetch(`${API_URL}/students`);
  return await res.json();
}

export async function addStudent(student: { name: string; age: number; course: string }) {
  const res = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return await res.json();
}

export async function updateStudent(id: number, student: { name: string; age: number; course: string }) {
  const res = await fetch(`${API_URL}/students/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return await res.json();
}

export async function deleteStudent(id: number) {
  const res = await fetch(`${API_URL}/students/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}
