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
    <div className="bg-white shadow-md rounded-xl p-6 w-full overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-slate-700">
        Employee List
      </h2>

      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">First</th>
            <th className="p-3 text-left">Last</th>
            <th className="p-3 text-left">Education</th>
            <th className="p-3 text-left">Birthdate</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr
              key={e.id}
              className="border-b hover:bg-slate-50 transition"
            >
              <td className="p-3">{e.id}</td>
              <td className="p-3">{e.firstName}</td>
              <td className="p-3">{e.lastName}</td>
              <td className="p-3">{e.educationLevel}</td>
              <td className="p-3">
                {e.dateOfBirth?.split("T")[0]}
              </td>

              <td className="p-3 flex gap-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600"
                  onClick={() => onEdit(e)}
                >
                  Edit
                </button>

                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md text-xs hover:bg-red-600"
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
