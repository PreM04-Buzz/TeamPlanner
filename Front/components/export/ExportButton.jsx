export default function ExportButton({ onExport }) {
    return (
      <button className="button primary" onClick={onExport}>
        Export to Excel
      </button>
    );
  }
  