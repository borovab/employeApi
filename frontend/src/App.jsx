import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

export default function App() {
  const [editing, setEditing] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  function reload() {
    setEditing(null);
    setRefreshKey(refreshKey + 1);
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <EmployeeForm editing={editing} onSaved={reload} />
      <EmployeeList key={refreshKey} onEdit={(e) => setEditing(e)} />
    </div>
  );
}
