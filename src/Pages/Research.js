import React, { useState } from 'react';

function Research() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const url = `https://ia800204.us.archive.org/fulltext/inside.php?item_id=designevaluation25clin&doc=designevaluation25clin&path=/27/items/designevaluation25clin&q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.text();

    // Extract the JSON object from the response
    const startIndex = data.indexOf('{');
    const endIndex = data.lastIndexOf('}') + 1;
    const jsonString = data.slice(startIndex, endIndex);

    const searchResults = JSON.parse(jsonString).matches;
    setResults(searchResults);
  };

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((result, i) => (
          <li key={i}>
            <p>{result.text}</p>
            <ul>
              {result.par.map((page, j) => (
                <li key={j}>
                  <p>Page {page.page}</p>
                  <p>Coordinates: {page.l},{page.t} - {page.r},{page.b}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Research;

