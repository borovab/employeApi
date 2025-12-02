const API_URL = import.meta.env.VITE_API_URL;

export async function getEmployees() {
  const res = await fetch(`${API_URL}/employees`);
  return res.json();
}

export async function getEmployee(id) {
  const res = await fetch(`${API_URL}/employees/${id}`);
  return res.json();
}

export async function createEmployee(data) {
  const res = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const text = await res.text();
  if (!res.ok) throw new Error(text);
  return JSON.parse(text);
}

export async function updateEmployee(id, data) {
  const res = await fetch(`${API_URL}/employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteEmployee(id) {
  await fetch(`${API_URL}/employees/${id}`, { method: "DELETE" });
}
