function Header() {
  return (
    <header
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "1.5rem",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ margin: "0 0 0.5rem 0" }}>Library Management System</h1>
      <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>
        Milestone 2 - Full Stack Application
      </p>
    </header>
  );
}

export default Header;
