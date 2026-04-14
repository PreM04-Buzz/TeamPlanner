import Badge from "../common/Badge";

export default function ScheduleTable({ schedules }) {
  return (
    <div className="card">
      <h3>Schedule Table</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Shift</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.employeeName}</td>
              <td>{schedule.date}</td>
              <td>{schedule.shift}</td>
              <td>
                <Badge text={schedule.status} type={schedule.statusType} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}