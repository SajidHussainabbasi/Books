import { loadBook } from "../handlers/loadBook.js";

export const initListeners = () => {
  const searchBtn = document.getElementById("searchBtn");
  const input = document.getElementById("bookInput");

  searchBtn.addEventListener("click", loadBook);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      loadBook();
    }
  });
};