import React, { useState } from 'react';
import styled from "styled-components";
import BookCard from "../Components/BookCard";

// Import the necessary components
import { InputGroup, FormControl, Button } from 'react-bootstrap';

// Define the placeholder image
const placeholderImage = 'https://via.placeholder.com/150';

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  ${({ hoveredBookId }) =>
    hoveredBookId &&
    `> *:not([data-id="${hoveredBookId}"]) {
      filter: blur(3px);
    }`
  };
`;

const Research = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [covers, setCovers] = useState([]);
  const [hoveredBookId, setHoveredBookId] = useState(null);

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
    const coverUrl = 'https://covers.openlibrary.org/b/id/{id}-M.jpg';
    const coverPromises = coverIds.map(id => fetch(coverUrl.replace('{id}', id)));
    const responses = await Promise.all(coverPromises);
    const blobs = await Promise.all(responses.map(response => response.blob()));
    const urls = blobs.map(blob => URL.createObjectURL(blob));
    const covers = coverIds.reduce((obj, id, index) => ({ ...obj, [id]: urls[index] }), {});
    setCovers(covers);
  };

  const isBookInList = (id) => {
    return false;
  };

  const handleSave = (book) => {
    console.log(book);
  };

  return (
    <div>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
        <Button variant="secondary" onClick={() => setResults([])}>Clear</Button>
      </InputGroup>
      {results.length > 0 && (
        <>
          <ResultsContainer hoveredBookId={hoveredBookId}>
            {results.map((result) => {
              const book = {
                id: result.cover_edition_key || result.key,
                volumeInfo: {
                  title: result.title,
                  authors: result.authors || [],
                  imageLinks: {
                    thumbnail: covers[result.cover_id] || placeholderImage,
                  },
                },
              };
              return (
                <BookCard
                  key={book.id}
                  book={book}
                  handleSave={handleSave}
                  setHoveredBookId={setHoveredBookId}
                  isBookInList={isBookInList}
                />
              );
            })}
            </ResultsContainer>
          <Button variant="secondary" onClick={() => setResults([])}>Clear</Button>
        </>
      )}
    </div>
  );
};
export default Research;