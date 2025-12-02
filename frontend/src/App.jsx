import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleSaved() {
    setSelectedEmployee(null);
  }

  return (
    <div>
      <h1>Employee Manager</h1>

      <EmployeeForm
        selected={selectedEmployee}
        onSaved={handleSaved}
      />

      <EmployeeList onEdit={setSelectedEmployee} />
    </div>
  );
}

export default App;
