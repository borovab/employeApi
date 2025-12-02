import { useEffect, useState } from "react";
import {
  getEmployees,
  deleteEmployee
} from "../services/employeeService";

export default function EmployeeList({ onEdit }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getEmployees();
    setEmployees(data);
  }

  async function handleDelete(id) {
    await deleteEmployee(id);
    load();
  }

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.firstName} {emp.lastName} ({emp.age} years)
            <button onClick={() => onEdit(emp)}>Edit</button>
            <button onClick={() => handleDelete(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
