import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const getAuthors = () => axios.get(`${API_BASE_URL}/authors`);
export const getAuthor = (id) => axios.get(`${API_BASE_URL}/authors/${id}`);
export const createAuthor = (data) =>
  axios.post(`${API_BASE_URL}/authors`, data);
export const updateAuthor = (id, data) =>
  axios.put(`${API_BASE_URL}/authors/${id}`, data);
export const deleteAuthor = (id) =>
  axios.delete(`${API_BASE_URL}/authors/${id}`);
export const getAuthorBooks = (id) =>
  axios.get(`${API_BASE_URL}/authors/${id}/books`);

export const getBooks = () => axios.get(`${API_BASE_URL}/books`);
export const getBook = (id) => axios.get(`${API_BASE_URL}/books/${id}`);
export const createBook = (data) => axios.post(`${API_BASE_URL}/books`, data);
export const updateBook = (id, data) =>
  axios.put(`${API_BASE_URL}/books/${id}`, data);
export const deleteBook = (id) => axios.delete(`${API_BASE_URL}/books/${id}`);
