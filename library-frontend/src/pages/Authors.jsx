import { useState, useEffect } from "react";
import { getAuthors, deleteAuthor } from "../api/api";
import AuthorModal from "../components/AuthorModal";
import { useNavigate } from "react-router-dom";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await getAuthors();
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
      alert("Error loading authors. Make sure backend is running!");
    }
  };

  const filteredAuthors = authors.filter(
    (author) =>
      author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAuthors = filteredAuthors.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredAuthors.length / itemsPerPage);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this author?")) {
      try {
        await deleteAuthor(id);
        fetchAuthors();
        alert("Author deleted successfully!");
      } catch (error) {
        console.error("Error deleting author:", error);
        alert("Error deleting author! It may have associated books.");
      }
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h2>Manage Authors</h2>
        <button
          onClick={() => {
            setSelectedAuthor(null);
            setIsModalOpen(true);
          }}
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            padding: "0.7rem 1.5rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#229954")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
        >
          + Add Author
        </button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="🔍 Search authors by name or email..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{
            width: "100%",
            padding: "0.7rem",
            fontSize: "1rem",
            border: "2px solid #ddd",
            borderRadius: "4px",
            boxSizing: "border-box",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#3498db")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            borderRadius: "4px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#34495e", color: "white" }}>
              <th style={{ padding: "1rem", textAlign: "left" }}>ID</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Name</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Email</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Biography</th>
              <th style={{ padding: "1rem", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentAuthors.length > 0 ? (
              currentAuthors.map((author) => (
                <tr
                  key={author.id}
                  style={{
                    borderBottom: "1px solid #ecf0f1",
                    transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f8f9fa")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  <td style={{ padding: "1rem" }}>{author.id}</td>
                  <td style={{ padding: "1rem", fontWeight: "500" }}>
                    {author.name}
                  </td>
                  <td style={{ padding: "1rem" }}>{author.email}</td>
                  <td style={{ padding: "1rem", maxWidth: "300px" }}>
                    {author.biography.substring(0, 60)}...
                  </td>
                  <td style={{ padding: "1rem", textAlign: "center" }}>
                    <button
                      onClick={() => navigate(`/authors/${author.id}`)}
                      style={{
                        backgroundColor: "#9b59b6",
                        color: "white",
                        padding: "0.4rem 0.8rem",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        marginRight: "0.5rem",
                        fontSize: "0.9rem",
                      }}
                    >
                      View
                    </button>
                    <button
                      onClick={() => {
                        setSelectedAuthor(author);
                        setIsModalOpen(true);
                      }}
                      style={{
                        backgroundColor: "#3498db",
                        color: "white",
                        padding: "0.4rem 0.8rem",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        marginRight: "0.5rem",
                        fontSize: "0.9rem",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(author.id)}
                      style={{
                        backgroundColor: "#e74c3c",
                        color: "white",
                        padding: "0.4rem 0.8rem",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    color: "#7f8c8d",
                    backgroundColor: "#ecf0f1",
                  }}
                >
                  {searchTerm
                    ? "No authors found matching your search."
                    : "No authors found. Backend might not be running or database is empty."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filteredAuthors.length > 0 && (
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: currentPage === 1 ? "#ccc" : "#34495e",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              fontSize: "0.9rem",
            }}
          >
            Previous
          </button>
          <span style={{ fontWeight: "500", color: "#2c3e50" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages || totalPages === 0}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor:
                currentPage === totalPages || totalPages === 0
                  ? "#ccc"
                  : "#34495e",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor:
                currentPage === totalPages || totalPages === 0
                  ? "not-allowed"
                  : "pointer",
              fontSize: "0.9rem",
            }}
          >
            Next
          </button>
        </div>
      )}

      <AuthorModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedAuthor(null);
        }}
        author={selectedAuthor}
        onSuccess={fetchAuthors}
      />
    </div>
  );
}

export default Authors;
