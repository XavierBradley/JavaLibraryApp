function About() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>About This Project</h2>

      <div
        style={{
          backgroundColor: "#ecf0f1",
          padding: "1.5rem",
          borderRadius: "8px",
          marginTop: "1.5rem",
        }}
      >
        <h3>Project Information</h3>
        <p>
          <strong>Project:</strong> Library Management System
        </p>
        <p>
          <strong>Milestone:</strong> 2 (Full-Stack Integration)
        </p>
        <p>
          <strong>Course:</strong> Java Web Programming (420-N34-LA)
        </p>
        <p>
          <strong>Semester:</strong> Fall 2025
        </p>
        <p>
          <strong>Institution:</strong> Champlain College Saint-Lambert
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#e8f4f8",
          padding: "1.5rem",
          borderRadius: "8px",
          marginTop: "1.5rem",
        }}
      >
        <h3>Team Members</h3>
        <p>
          <strong>Jose Santiago Arevalo Morales</strong> - Frontend Development
          & Documentation
        </p>
        <p>
          <strong>Xavier Bradley</strong> - Backend Development & Database
        </p>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <h3>Technologies Used</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div>
            <h4>Frontend</h4>
            <ul>
              <li>React 18</li>
              <li>Vite</li>
              <li>React Router</li>
              <li>Axios</li>
            </ul>
          </div>
          <div>
            <h4>Backend</h4>
            <ul>
              <li>Spring Boot</li>
              <li>PostgreSQL</li>
              <li>JPA/Hibernate</li>
              <li>REST API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
