// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>
        🏠 Home
      </Link>
      <Link to="/create" style={{ color: "#fff" }}>
        ✏️ Create Note
      </Link>
    </nav>
  );
}
