import Button from "../common/Button";

export default function ApprovalQueue({ requests, onApprove, onReject }) {
  return (
    <div className="card">
      <h3>Pending Approvals</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Shift</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.employeeName}</td>
              <td>{request.date}</td>
              <td>{request.shift}</td>
              <td>{request.notes}</td>
              <td className="action-group">
                <Button className="success" onClick={() => onApprove(request.id)}>
                  Approve
                </Button>
                <Button className="danger" onClick={() => onReject(request.id)}>
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}