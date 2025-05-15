import { DEFAULT_BOOK_IMAGE } from "../config.js";

export const renderBookList = (books) => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (books.length === 0) {
    resultDiv.innerHTML = "<p>No results found.</p>";
    return;
  }

  const book = books[0];
  const title = book.title || "Unknown Title";
  const authors = book.author_name ? book.author_name.join(", ") : "Unknown Author";
  const year = book.first_publish_year || "N/A";
  const coverId = book.cover_i;
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : DEFAULT_BOOK_IMAGE;
  const language = book.language ? book.language.join(", ").toUpperCase() : "Unknown";

  resultDiv.innerHTML = `
    <div class="book">
      <img src="${imageUrl}" alt="Book cover">
      <h3>${title}</h3>
      <p><strong>Author:</strong> ${authors}</p>
      <p><strong>First Published:</strong> ${year}</p>
      <p><strong>Language:</strong> ${language}</p>
    </div>
  `;
};