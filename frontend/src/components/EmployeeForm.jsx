import { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../services/employeeService";

export default function EmployeeForm({ editing, onSaved }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    educationLevel: "",
  });

  useEffect(() => {
    if (editing) {
      setForm({
        firstName: editing.firstName,
        lastName: editing.lastName,
        dateOfBirth: editing.dateOfBirth.split("T")[0],
        educationLevel: editing.educationLevel,
      });
    }
  }, [editing]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (editing) await updateEmployee(editing.id, form);
      else await createEmployee(form);

      onSaved();
    } catch (err) {
      alert("Gabim: " + err.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold text-slate-700">
        {editing ? "Edit Employee" : "Add Employee"}
      </h2>

      <input
        name="firstName"
        placeholder="First Name"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        value={form.firstName}
        onChange={handleChange}
      />

      <input
        name="lastName"
        placeholder="Last Name"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        value={form.lastName}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dateOfBirth"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        value={form.dateOfBirth}
        onChange={handleChange}
      />

      <input
        name="educationLevel"
        placeholder="Education Level"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        value={form.educationLevel}
        onChange={handleChange}
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        {editing ? "Save Changes" : "Add Employee"}
      </button>
    </form>
  );
}
