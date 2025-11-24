import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  const menuStyle = {
    backgroundColor: "#34495e",
    padding: "1rem",
    display: "flex",
    gap: "1.5rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const linkStyle = (path) => ({
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    backgroundColor: location.pathname === path ? "#3498db" : "transparent",
    transition: "background-color 0.3s",
  });

  return (
    <nav style={menuStyle}>
      <Link to="/" style={linkStyle("/")}>
        Home
      </Link>
      <Link to="/authors" style={linkStyle("/authors")}>
        Manage Authors
      </Link>
      <Link to="/books" style={linkStyle("/books")}>
        Manage Books
      </Link>
      <Link to="/about" style={linkStyle("/about")}>
        About
      </Link>
    </nav>
  );
}

export default Menu;
