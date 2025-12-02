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
    if (editing) setForm(editing);
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
    <form onSubmit={handleSubmit} className="card">
      <h2 className="card-title">
        {editing ? "Edit Employee" : "Add Employee"}
      </h2>

      <div className="gap-15">
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
      </div>
    </form>
  );
}
