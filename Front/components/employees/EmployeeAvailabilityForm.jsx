import { useState } from "react";
import Button from "../common/Button";

export default function EmployeeAvailabilityForm({ employees, onSubmitRequest }) {
  const [form, setForm] = useState({
    employeeId: employees[0]?.id || "",
    date: "",
    shift: "Morning",
    notes: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.employeeId || !form.date) return;
    onSubmitRequest(form);
    setForm({ ...form, date: "", notes: "" });
  }

  return (
    <div className="card">
      <h3>Employee Date Selection</h3>
      <form className="form-grid" onSubmit={handleSubmit}>
        <select
          className="input"
          value={form.employeeId}
          onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
        >
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
        <input
          className="input"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <select
          className="input"
          value={form.shift}
          onChange={(e) => setForm({ ...form, shift: e.target.value })}
        >
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
          <option>Night</option>
        </select>
        <textarea
          className="input"
          placeholder="Notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
        <Button type="submit" className="primary">Send for Approval</Button>
      </form>
    </div>
  );
}