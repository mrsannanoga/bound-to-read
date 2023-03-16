import React, { useState } from 'react';

function Research() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const url = `https://openlibrary.org/subjects/${encodeURIComponent(query)}.json?details=true`;
    const response = await fetch(url);
    const data = await response.json();

    // Extract the array of works from the response
    const works = data.works;
    setResults(works);
  };

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((work, i) => (
          <li key={i} style={{ fontSize: '18px' }}>
            <p>{work.title}</p>
            <p>{work.authors.map(author => author.name).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Research;

