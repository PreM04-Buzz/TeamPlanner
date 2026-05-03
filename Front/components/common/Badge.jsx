export default function Badge({ text, type = "default" }) {
    return <span className={`badge badge-${type}`}>{text}</span>;
  }
  