import { loadBook } from "../handlers/loadBook.js";

export const initListeners = () => {
  const searchBtn = document.getElementById("searchBtn");
  const input = document.getElementById("bookInput");
  const searchBar = document.querySelector(".search-bar");

  // Create or get message element
  let messageEl = document.getElementById("message");
  if (!messageEl) {
    messageEl = document.createElement("div");
    messageEl.id = "message";
    messageEl.style.color = "red";
    messageEl.style.marginTop = "8px";
    searchBar.appendChild(messageEl); 
  }

  const handleSearch = () => {
    const bookName = input.value.trim();
    if (bookName === "") {
      messageEl.textContent = "Please Enter Book name";
    } else {
      messageEl.textContent = ""; // Clear message
      loadBook();
    }
  };

  searchBtn.addEventListener("click", handleSearch);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });
};