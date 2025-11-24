import { useState, useEffect } from "react";
import { getBooks, deleteBook } from "../api/api";

function Books() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      alert("Error loading books. Make sure backend is running!");
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.ISBN.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(id);
        fetchBooks();
        alert("Book deleted successfully!");
      } catch (error) {
        console.error("Error deleting book:", error);
        alert("Error deleting book!");
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
        <h2>Manage Books</h2>
        <button
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            padding: "0.7rem 1.5rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          + Add Book
        </button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search books by title or ISBN..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.7rem",
            fontSize: "1rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
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
              <th style={{ padding: "1rem", textAlign: "left" }}>Title</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>ISBN</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Year</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Author</th>
              <th style={{ padding: "1rem", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.length > 0 ? (
              currentBooks.map((book) => (
                <tr key={book.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "1rem" }}>{book.id}</td>
                  <td style={{ padding: "1rem", fontWeight: "500" }}>
                    {book.Title}
                  </td>
                  <td style={{ padding: "1rem" }}>{book.ISBN}</td>
                  <td style={{ padding: "1rem" }}>{book.publicationYear}</td>
                  <td style={{ padding: "1rem" }}>
                    {book.author ? book.author.name : "No Author"}
                  </td>
                  <td style={{ padding: "1rem", textAlign: "center" }}>
                    <button
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
                      onClick={() => handleDelete(book.id)}
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
                  colSpan="6"
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    color: "#666",
                  }}
                >
                  {searchTerm
                    ? "No books found matching your search."
                    : "No books found. Backend might not be running or database is empty."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filteredBooks.length > 0 && (
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
          <span style={{ fontWeight: "500" }}>
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
    </div>
  );
}

export default Books;
