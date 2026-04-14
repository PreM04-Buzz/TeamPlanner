import ScheduleTable from "../components/schedules/ScheduleTable";

const schedules = [
  {
    id: 1,
    employeeName: "Alex",
    date: "2026-04-20",
    shift: "Morning",
    status: "Approved",
    statusType: "success",
  },
  {
    id: 2,
    employeeName: "Jordan",
    date: "2026-04-21",
    shift: "Evening",
    status: "Pending",
    statusType: "warning",
  },
];

export default function Schedule() {
  return <ScheduleTable schedules={schedules} />;
}