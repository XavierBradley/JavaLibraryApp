import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAuthor, getAuthorBooks } from "../api/api";

function AuthorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAuthorDetails();
  }, [id]);

  const fetchAuthorDetails = async () => {
    try {
      const authorResponse = await getAuthor(id);
      const booksResponse = await getAuthorBooks(id);
      setAuthor(authorResponse.data);
      setBooks(booksResponse.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching author details:", error);
      alert("Error loading author details!");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
    );
  }

  if (!author) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        Author not found!
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <button
        onClick={() => navigate("/authors")}
        style={{
          backgroundColor: "#95a5a6",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "1.5rem",
          fontSize: "0.9rem",
        }}
      >
        ← Back to Authors
      </button>

      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ marginTop: 0, color: "#2c3e50" }}>Author Details</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "150px 1fr",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <strong>ID:</strong>
          <span>{author.id}</span>

          <strong>Name:</strong>
          <span>{author.name}</span>

          <strong>Email:</strong>
          <span>{author.email}</span>

          <strong>Biography:</strong>
          <span>{author.biography}</span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#2c3e50" }}>
          Books by {author.name} ({books.length})
        </h3>

        {books.length > 0 ? (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1rem",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#ecf0f1" }}>
                <th
                  style={{
                    padding: "0.8rem",
                    textAlign: "left",
                    borderBottom: "2px solid #bdc3c7",
                  }}
                >
                  Title
                </th>
                <th
                  style={{
                    padding: "0.8rem",
                    textAlign: "left",
                    borderBottom: "2px solid #bdc3c7",
                  }}
                >
                  ISBN
                </th>
                <th
                  style={{
                    padding: "0.8rem",
                    textAlign: "left",
                    borderBottom: "2px solid #bdc3c7",
                  }}
                >
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} style={{ borderBottom: "1px solid #ecf0f1" }}>
                  <td style={{ padding: "0.8rem", fontWeight: "500" }}>
                    {book.Title}
                  </td>
                  <td style={{ padding: "0.8rem" }}>{book.ISBN}</td>
                  <td style={{ padding: "0.8rem" }}>{book.publicationYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
              color: "#7f8c8d",
              backgroundColor: "#ecf0f1",
              borderRadius: "4px",
              marginTop: "1rem",
            }}
          >
            This author has no books yet.
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthorDetails;
