## Backlog

### Must-Have
- [x] Fetch book data from Open Library API (`https://openlibrary.org/search.json?title={bookName}`)
- [x] Display key details: title, author(s), first publish year, and book cover image
- [x] User input field to search by book title
- [x] Trigger search with both button click and "Enter" key
- [x] Show “No results found” message when no matches
- [x] Use async/await for API handling
- [x] Organized modular file structure (`api-calls`, `handlers`, `listeners`, `components`)
- [x] Center-aligned layout with consistent width for input and result display
- [x] Fallback image for books without a cover
- [x] Clean, centered, and responsive UI using CSS

### Nice-to-Have
- [ ] Add loading spinner or "Searching..." message during fetch
- [ ] Display a list of multiple matching books (not just the first result)
- [ ] Clear input after successful search
- [ ] Add recent searches with clickable history (using `localStorage`)
- [ ] Auto-focus input field on page load
- [ ] Dark/light theme toggle
- [ ] Improve keyboard accessibility (e.g., tab navigation, focus indicators)
- [ ] Add error handling for network failures