import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import "../App.css";

export default function EmployeeList({ onEdit }) {
  const [employees, setEmployees] = useState([]);

  async function load() {
    const data = await getEmployees();
    setEmployees(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(id) {
    if (confirm("A je i sigurt?")) {
      await deleteEmployee(id);
      load();
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Employee List</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Education</th>
            <th>Birthdate</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.educationLevel}</td>
              <td>{e.dateOfBirth?.split("T")[0]}</td>

              <td>
                <button className="btn-small btn-edit" onClick={() => onEdit(e)}>
                  Edit
                </button>

                <button
                  className="btn-small btn-delete"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
