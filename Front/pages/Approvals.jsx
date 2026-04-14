import { useState } from "react";
import ApprovalQueue from "../components/approvals/ApprovalQueue";

export default function Approvals() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      employeeName: "Alex",
      date: "2026-04-20",
      shift: "Morning",
      notes: "Available full day",
    },
    {
      id: 2,
      employeeName: "Jordan",
      date: "2026-04-22",
      shift: "Night",
      notes: "Can work after 6 PM",
    },
  ]);

  function onApprove(id) {
    setRequests((prev) => prev.filter((request) => request.id !== id));
  }

  function onReject(id) {
    setRequests((prev) => prev.filter((request) => request.id !== id));
  }

  return <ApprovalQueue requests={requests} onApprove={onApprove} onReject={onReject} />;
}