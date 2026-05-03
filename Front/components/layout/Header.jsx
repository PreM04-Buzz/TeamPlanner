export default function Header() {
    return (
      <header className="header">
        <div>
          <h1>Team Scheduling Dashboard</h1>
          <p>Manage employees, schedules, approvals, and exports.</p>
        </div>
        <div className="header-actions">
          <input type="text" placeholder="Search..." className="input" />
          <button className="button primary">+ Quick Add</button>
        </div>
      </header>
    );
  }
  6. src/components/common/Button.jsx
  export default function Button({ children, className = "", ...props }) {
    return (
      <button className={`button ${className}`.trim()} {...props}>
        {children}
      </button>
    );
  }
  