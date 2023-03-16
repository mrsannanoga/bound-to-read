import React, { useState, useEffect } from 'react';
import BookSearchCard from '../Components/BookSearchCard';

function Research() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [covers, setCovers] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);

  // Load search results from localStorage on mount
  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    setResults(storedResults);
  }, []);

  // Save search results to localStorage whenever the results state changes
  useEffect(() => {
    localStorage.setItem('searchResults', JSON.stringify(results));
  }, [results]);

  const handleSearch = async () => {
    const url = `https://openlibrary.org/subjects/${encodeURIComponent(query)}.json?details=true`;
    const response = await fetch(url);
    const data = await response.json();

    // Extract the array of works from the response
    const works = data.works || [];
    setResults(works);

    // Fetch cover images for each work and store them in the covers state variable
    const coverIds = works
      .map(work => work.cover_id)
      .filter(id => id !== undefined);
    const coverUrl = 'https://covers.openlibrary.org/b/id/';
    const coverUrls = coverIds.map(id => `${coverUrl}${id}-M.jpg`);
    const coverResponses = await Promise.all(coverUrls.map(url => fetch(url)));
    const coverBlobs = await Promise.all(coverResponses.map(response => response.blob()));
    const coverUrlsWithBlobs = coverUrls.map((url, i) => ({ url, blob: coverBlobs[i] }));
    setCovers(coverUrlsWithBlobs);
  };

  const isBookInList = (bookId) => {
    return savedBooks.some(book => book.key === bookId);
  }

  const handleSaveBook = (book) => {
    setSavedBooks([...savedBooks, book]);
  }

  useEffect(() => {
    // Load saved books from localStorage on mount
    const savedBooksFromStorage = JSON.parse(localStorage.getItem('savedBooks')) || [];
    setSavedBooks(savedBooksFromStorage);
  }, []);

  useEffect(() => {
    // Save saved books to localStorage whenever the savedBooks state changes
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
  }, [savedBooks]);

  const handleClearResults = () => {
    setResults([]);
    setCovers([]);
    localStorage.removeItem('searchResults');
  }

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClearResults}>Clear Results</button>

      {results.length > 0 &&
        <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
          {results.map((work, i) => {
            const cover = covers[i] || {};
            return (
              <li key={i} style={{ fontSize: '18px', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {cover.url && <img src={cover.url} alt="" style={{ height: '100px' }} />}
                <BookSearchCard
                  book={work}
                  handleSaveBook={handleSaveBook}
isBookInList={isBookInList}
/>
</li>
)
})}
</ul>
}
{savedBooks.length > 0 &&
    <div>
      <h2>Saved Books:</h2>
      <ul>
        {savedBooks.map((book, i) => (
          <li key={i}>
            {book.title} by {book.author_name}
          </li>
        ))}
      </ul>
    </div>
  }
</div>
);
}

export default Research;


