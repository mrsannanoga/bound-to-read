import React, { useState } from 'react';

function Research() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [covers, setCovers] = useState([]);

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

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
  {results.map((work, i) => {
    const cover = covers[i] || {};
    return (
      <li key={i} style={{ fontSize: '18px', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {cover.url && <img src={cover.url} alt="" style={{ height: '100px' }} />}
        <p style={{ marginTop: '10px', textAlign: 'center' }}>{work.title}</p>
        <p style={{ marginTop: '5px', textAlign: 'center' }}>{work.authors.map(author => author.name).join(',')}</p>
      </li>
    );
  })}
</ul>

    </div>
  );
}

export default Research;

