import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import Modal from "./components/Modal";
import "./App.css";

export default function App() {
  const [editing, setEditing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleEdit(emp) {
    setEditing(emp);
    setModalOpen(true);
  }

  function handleAdd() {
    setEditing(null);        // form i pastër
    setModalOpen(true);      // hap modalin
  }

  function handleSaved() {
    setModalOpen(false);
    setEditing(null);
  }

  return (
    <div className="container">

      <button className="btn btn-add" onClick={handleAdd}>
        ➕ Add Employee
      </button>

      <EmployeeList onEdit={handleEdit} />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <EmployeeForm editing={editing} onSaved={handleSaved} />
      </Modal>
    </div>
  );
}
