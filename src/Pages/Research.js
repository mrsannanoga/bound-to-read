import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BookSearchCard from "../Components/BookSearchCard";
import { motion } from "framer-motion";
import { pageAnimations } from "../Animations";
import placeholderImage from "../assets/img/placeholder.webp";

// Import the necessary components
import { Button } from "react-bootstrap";

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  flex-wrap: nowrap;
`;

const FormControl = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.5rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3); 
  }
`;

const ClearButton = styled(Button)`
  background-color: #7c3238;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); // Add a box-shadow for the drop shadow effect
  transition: all 0.2s ease; // Add a transition for a smooth effect

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.6); // Increase the box-shadow when hovering
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); // Decrease the box-shadow when the button is active (pressed)
    transform: translateY(
      1px
    ); // Add a slight downward movement to simulate a button press
  }
`;

const SearchButton = styled(Button)`
  background-color: #b4a29e;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); // Add a box-shadow for the drop shadow effect
  transition: all 0.2s ease; // Add a transition for a smooth effect

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.6); // Increase the box-shadow when hovering
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); // Decrease the box-shadow when the button is active (pressed)
    transform: translateY(
      1px
    ); // Add a slight downward movement to simulate a button press
  }
`;
const BrowseButton = styled(Button)`
  background-color: #6c757d;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin-left:1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); // Add a box-shadow for the drop shadow effect
  transition: all 0.2s ease; // Add a transition for a smooth effect

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.6); // Increase the box-shadow when hovering
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); // Decrease the box-shadow when the button is active (pressed)
    transform: translateY(
      1px
    ); // Add a slight downward movement to simulate a button press
  }

  /* Add the target="_blank" attribute */
  a {
    color: white;
    text-decoration: none;
  }
`;
const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  ${({ hoveredBookId }) =>
    hoveredBookId &&
    `> *:not([data-id="${hoveredBookId}"]) {
    filter: blur(2px);
  }`};
  z-index: 1;
`;

const Research = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [covers, setCovers] = useState([]);
  const [hoveredBookId, setHoveredBookId] = useState(null);

  useEffect(() => {
    // Retrieve saved results from local storage
    const savedResults = JSON.parse(localStorage.getItem("results"));
    if (savedResults && savedResults.length > 0) {
      setResults(savedResults);
    }

    // Retrieve saved cover URLs from local storage
    const savedCoverUrls = JSON.parse(localStorage.getItem("coverUrls"));
    if (savedCoverUrls) {
      const coverIds = Object.keys(savedCoverUrls);
      const covers = coverIds.reduce(
        (obj, id) => ({ ...obj, [id]: savedCoverUrls[id] }),
        {}
      );
      setCovers(covers);
    }
  }, []);


  useEffect(() => {
    // Save results to local storage whenever the results state variable changes
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  const handleBrowse = () => {
    window.open("https://openlibrary.org/", "_blank");
  };

  const handleSearch = async () => {
    const url = `https://openlibrary.org/subjects/${encodeURIComponent(
      query
    )}.json?details=true`;
    const response = await fetch(url);
    const data = await response.json();
    // Extract the array of works from the response
    const works = data.works || [];
    setResults(works);

    // Fetch cover images for each work and store them in the covers state variable
    const coverIds = works
      .map((work) => work.cover_id)
      .filter((id) => id !== undefined);
    const coverUrl = "https://covers.openlibrary.org/b/id/{id}-M.jpg";
    const coverPromises = coverIds.map((id) =>
      fetch(coverUrl.replace("{id}", id))
    );
    const responses = await Promise.all(coverPromises);
    const blobs = await Promise.all(
      responses.map((response) => response.blob())
    );
    const urls = blobs.map((blob) => URL.createObjectURL(blob));
    const covers = coverIds.reduce(
      (obj, id, index) => ({ ...obj, [id]: urls[index] }),
      {}
    );
    setCovers(covers);
    
    localStorage.setItem("coverUrls", JSON.stringify(covers));
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    localStorage.removeItem("results");
  };

  const isBookInList = (id) => {
    return false;
  };

  const handleSave = (book) => {
    console.log(book);
  };

  return (
    <motion.div
      exit="exit"
      variants={pageAnimations}
      initial="hidden"
      animate="show"
    >
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search by subject"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        <ClearButton variant="secondary" onClick={handleClear}>
          Clear
        </ClearButton>
        <BrowseButton onClick={handleBrowse}>Visit Open Library</BrowseButton>
      </InputGroup>

      {results.length > 0 && (
        <>
          <ResultsContainer hoveredBookId={hoveredBookId}>
            {results.map((result) => {
              const bookId = result.cover_edition_key || result.key;

              const book = {
                id: bookId,
                volumeInfo: {
                  title: result.title,
                  authors: result.authors || [],
                  imageLinks: {
                    thumbnail: covers[result.cover_id] || placeholderImage,
                  },
                },
              };
              return (
                <BookSearchCard
                  key={book.id}
                  book={book}
                  handleSave={handleSave}
                  setHoveredBookId={setHoveredBookId}
                  isBookInList={isBookInList}
                  hoveredBookId={hoveredBookId}
                />
              );
            })}
          </ResultsContainer>
        </>
      )}
    </motion.div>
  );
};

export default Research;
