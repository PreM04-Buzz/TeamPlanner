import ExportButton from "../components/export/ExportButton";

export default function Export() {
  function handleExport() {
    alert("Export to Excel logic will be connected here.");
  }

  return (
    <div className="card">
      <h3>Export Schedule</h3>
      <p>Download workforce schedules for office use.</p>
      <ExportButton onExport={handleExport} />
    </div>
  );
}