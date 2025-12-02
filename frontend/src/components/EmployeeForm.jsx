import { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../services/employeeService";
import "../App.css";

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
    <form onSubmit={handleSubmit}>
      <h2>{editing ? "Edit Employee" : "Add Employee"}</h2>

      <input
        name="firstName"
        placeholder="First Name"
        className="input"
        value={form.firstName}
        onChange={handleChange}
      />

      <input
        name="lastName"
        placeholder="Last Name"
        className="input"
        value={form.lastName}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dateOfBirth"
        className="input"
        value={form.dateOfBirth}
        onChange={handleChange}
      />

      <input
        name="educationLevel"
        placeholder="Education Level"
        className="input"
        value={form.educationLevel}
        onChange={handleChange}
      />

      <button className="btn">
        {editing ? "Save Changes" : "Add Employee"}
      </button>
    </form>
  );
}
