import { useState } from "react";
import EmployeeTable from "../components/employees/EmployeeTable";
import AddEmployeeModal from "../components/employees/AddEmployeeModal";
import EmployeeAvailabilityForm from "../components/employees/EmployeeAvailabilityForm";

export default function Employees() {
  const [employees, setEmployees] = useState([
    { id: "EMP001", name: "Alex", department: "Operations" },
    { id: "EMP002", name: "Jordan", department: "Support" },
  ]);

  function addEmployee(employee) {
    setEmployees((prev) => [...prev, employee]);
  }

  function removeEmployee(id) {
    setEmployees((prev) => prev.filter((employee) => employee.id !== id));
  }

  function submitRequest(data) {
    console.log("Availability request submitted:", data);
  }

  return (
    <div className="page-stack">
      <AddEmployeeModal onAdd={addEmployee} />
      <EmployeeTable employees={employees} onRemove={removeEmployee} />
      <EmployeeAvailabilityForm employees={employees} onSubmitRequest={submitRequest} />
    </div>
  );
}