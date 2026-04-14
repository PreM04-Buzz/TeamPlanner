export default function Button({ children, className = "", ...props }) {
    return (
      <button className={`button ${className}`.trim()} {...props}>
        {children}
      </button>
    );
  }
  7. src/components/common/Input.jsx
  export default function Input(props) {
    return <input className="input" {...props} />;
  }
  8. src/components/common/Badge.jsx
  export default function Badge({ text, type = "default" }) {
    return <span className={`badge badge-${type}`}>{text}</span>;
  }  