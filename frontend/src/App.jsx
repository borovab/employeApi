import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import Modal from "./components/Modal";

export default function App() {
  const [editing, setEditing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleEdit(emp) {
    setEditing(emp);
    setModalOpen(true);
  }

  function handleAdd() {
    setEditing(null);
    setModalOpen(true);
  }

  function handleSaved() {
    setModalOpen(false);
    setEditing(null);
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        ➕ Add Employee
      </button>

      <EmployeeList onEdit={handleEdit} />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <EmployeeForm editing={editing} onSaved={handleSaved} />
      </Modal>
    </div>
  );
}
