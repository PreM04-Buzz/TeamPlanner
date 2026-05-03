import SummaryCard from "../components/dashboard/SummaryCard";

export default function Dashboard() {
  return (
    <div className="page-grid">
      <SummaryCard title="Total Employees" value="20" />
      <SummaryCard title="Pending Approvals" value="6" />
      <SummaryCard title="Approved Schedules" value="14" />
      <SummaryCard title="Completed Work" value="8" />
    </div>
  );
}