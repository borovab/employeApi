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
    if (editing) setForm(editing);
  }, [editing]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (editing)
        await updateEmployee(editing.id, form);
      else
        await createEmployee(form);

      onSaved();
    } catch (err) {
      alert("Gabim: " + err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">
        {editing ? "Edit Employee" : "Add Employee"}
      </h2>

      <div className="grid gap-2">
        <input
          name="firstName"
          placeholder="First Name"
          className="border p-2"
          value={form.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          className="border p-2"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dateOfBirth"
          className="border p-2"
          value={form.dateOfBirth}
          onChange={handleChange}
        />

        <input
          name="educationLevel"
          placeholder="Education Level"
          className="border p-2"
          value={form.educationLevel}
          onChange={handleChange}
        />

        <button className="bg-green-600 text-white p-2 mt-2">
          {editing ? "Save Changes" : "Add Employee"}
        </button>
      </div>
    </form>
  );
}
