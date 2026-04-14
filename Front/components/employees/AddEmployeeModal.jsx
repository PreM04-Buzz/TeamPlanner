import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

export default function AddEmployeeModal({ onAdd }) {
  const [form, setForm] = useState({ id: "", name: "", department: "" });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.id || !form.name || !form.department) return;
    onAdd(form);
    setForm({ id: "", name: "", department: "" });
  }

  return (
    <div className="card">
      <h3>Add Employee</h3>
      <form className="form-grid" onSubmit={handleSubmit}>
        <Input name="id" placeholder="Employee ID" value={form.id} onChange={handleChange} />
        <Input name="name" placeholder="Employee Name" value={form.name} onChange={handleChange} />
        <Input name="department" placeholder="Department" value={form.department} onChange={handleChange} />
        <Button type="submit" className="primary">Add Employee</Button>
      </form>
    </div>
  );
}