import { useState, useEffect } from "react";
import { createAuthor, updateAuthor } from "../api/api";

function AuthorModal({ isOpen, onClose, author, onSuccess }) {
  const [formData, setFormData] = useState({
    Name: "",
    biography: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (author) {
      setFormData({
        Name: author.name,
        biography: author.biography,
        email: author.email,
      });
    } else {
      setFormData({ Name: "", biography: "", email: "" });
    }
    setErrors({});
  }, [author, isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.Name.trim()) newErrors.Name = "Name is required";
    if (formData.Name.length > 100)
      newErrors.Name = "Name must be less than 100 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.biography.trim())
      newErrors.biography = "Biography is required";
    if (formData.biography.length > 1000)
      newErrors.biography = "Biography must be less than 1000 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      if (author) {
        await updateAuthor(author.id, formData);
        alert("Author updated successfully!");
      } else {
        await createAuthor(formData);
        alert("Author created successfully!");
      }
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error saving author:", error);
      if (error.response && error.response.data) {
        alert(
          `Error: ${error.response.data.message || "Failed to save author"}`
        );
      } else {
        alert(
          "Error saving author! Make sure backend is running and data is valid."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "500px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginTop: 0, color: "#2c3e50" }}>
          {author ? "Edit Author" : "Add New Author"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
                color: "#2c3e50",
              }}
            >
              Name <span style={{ color: "#e74c3c" }}>*</span>
            </label>
            <input
              type="text"
              value={formData.Name}
              onChange={(e) =>
                setFormData({ ...formData, Name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.7rem",
                border: `2px solid ${errors.Name ? "#e74c3c" : "#ddd"}`,
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box",
                transition: "border-color 0.3s",
              }}
              placeholder="Enter author name"
            />
            {errors.Name && (
              <div
                style={{
                  color: "#e74c3c",
                  fontSize: "0.85rem",
                  marginTop: "0.3rem",
                }}
              >
                {errors.Name}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
                color: "#2c3e50",
              }}
            >
              Email <span style={{ color: "#e74c3c" }}>*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.7rem",
                border: `2px solid ${errors.email ? "#e74c3c" : "#ddd"}`,
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box",
                transition: "border-color 0.3s",
              }}
              placeholder="author@example.com"
            />
            {errors.email && (
              <div
                style={{
                  color: "#e74c3c",
                  fontSize: "0.85rem",
                  marginTop: "0.3rem",
                }}
              >
                {errors.email}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
                color: "#2c3e50",
              }}
            >
              Biography <span style={{ color: "#e74c3c" }}>*</span>
            </label>
            <textarea
              value={formData.biography}
              onChange={(e) =>
                setFormData({ ...formData, biography: e.target.value })
              }
              rows="4"
              style={{
                width: "100%",
                padding: "0.7rem",
                border: `2px solid ${errors.biography ? "#e74c3c" : "#ddd"}`,
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box",
                resize: "vertical",
                fontFamily: "inherit",
                transition: "border-color 0.3s",
              }}
              placeholder="Enter author biography"
            />
            {errors.biography && (
              <div
                style={{
                  color: "#e74c3c",
                  fontSize: "0.85rem",
                  marginTop: "0.3rem",
                }}
              >
                {errors.biography}
              </div>
            )}
          </div>

          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}
          >
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              style={{
                padding: "0.7rem 1.5rem",
                backgroundColor: "#95a5a6",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                opacity: isSubmitting ? 0.6 : 1,
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "0.7rem 1.5rem",
                backgroundColor: isSubmitting ? "#95a5a6" : "#27ae60",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {isSubmitting ? "Saving..." : author ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthorModal;
