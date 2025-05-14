import { fetchBooks } from "../../api-calls/books.js";
import { renderBookList } from "../components/bookList.js";

export const loadBook = async () => {
  const input = document.getElementById("bookInput");
  const bookName = input.value.trim();
  if (!bookName) return;

  const books = await fetchBooks(bookName);
  renderBookList(books);
};