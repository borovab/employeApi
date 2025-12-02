import { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../services/employeeService";

export default function EmployeeForm({ selected, onSaved }) {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    educationLevel: ""
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (selected) {
      await updateEmployee(selected.id, form);
    } else {
      await createEmployee(form);
    }

    onSaved();
    setForm({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      educationLevel: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selected ? "Edit Employee" : "Add Employee"}</h2>

      <input
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        required
      />

      <input
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        required
      />

      <input
        name="dateOfBirth"
        type="date"
        value={form.dateOfBirth}
        onChange={handleChange}
        required
      />

      <input
        name="educationLevel"
        placeholder="Education Level"
        value={form.educationLevel}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {selected ? "Update" : "Add"}
      </button>
    </form>
  );
}
