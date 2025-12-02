import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";

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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Last Name</th>
            <th className="p-2 border">Education</th>
            <th className="p-2 border">Birthdate</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td className="p-2 border">{e.id}</td>
              <td className="p-2 border">{e.firstName}</td>
              <td className="p-2 border">{e.lastName}</td>
              <td className="p-2 border">{e.educationLevel}</td>
              <td className="p-2 border">{e.dateOfBirth?.split("T")[0]}</td>
              <td className="p-2 border flex gap-2">
                <button
                  className="px-2 bg-blue-500 text-white"
                  onClick={() => onEdit(e)}
                >
                  Edit
                </button>

                <button
                  className="px-2 bg-red-500 text-white"
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
