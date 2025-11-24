function Home() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Welcome to Library Management System</h2>

      <div
        style={{
          backgroundColor: "#ecf0f1",
          padding: "1.5rem",
          borderRadius: "8px",
          marginTop: "1.5rem",
        }}
      >
        <h3>Project Overview</h3>
        <p>This is a full-stack application built with:</p>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Frontend:</strong> React with Vite
          </li>
          <li>
            <strong>Backend:</strong> Spring Boot (Java)
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <h3>Features</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Manage Authors (Create, Read, Update, Delete)</li>
          <li>Manage Books (Create, Read, Update, Delete)</li>
          <li>View author details with their books</li>
          <li>Search and pagination functionality</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#d5f4e6",
          borderLeft: "4px solid #27ae60",
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Getting Started:</strong> Use the menu above to manage authors
          and books!
        </p>
      </div>
    </div>
  );
}

export default Home;
