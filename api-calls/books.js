export const fetchBooks = async (bookName) => {
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(bookName)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch book data");
    }
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error("Error in fetchBooks:", error);
    return [];
  }
};
