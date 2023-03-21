import React, { useState, useEffect, useContext } from "react";
import BookCard from "../Components/BookCard";
import BooksContext from "../Components/BooksContext";
import { motion } from "framer-motion";
import { pageAnimations } from "../Animations";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100%;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.5rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchButton = styled.button`
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

const ClearSearchButton = styled.button`
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

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  ${({ hoveredBookId }) =>
    hoveredBookId &&
    `
    > *:not([data-id="${hoveredBookId}"]) {
      filter: blur(2px);
    }
  `}
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setSavedBooks } = useContext(BooksContext);
  const { savedBooks } = useContext(BooksContext);
  const [hoveredBookId, setHoveredBookId] = useState(null);
  const isBookInList = (bookId) => {
    return savedBooks.some((book) => book.id === bookId);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      setSearchResults(data.items);
      // Save search results to local storage
      localStorage.setItem("searchResults", JSON.stringify(data.items));
    } else {
      console.error("Failed to fetch data");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleSave = (book) => {
    setSavedBooks((prevBooks) => [...prevBooks, book]);
  };

  // Clear search results function
  const clearSearchResults = () => {
    setSearchResults([]);
    setSearchTerm("");
    localStorage.removeItem("searchResults");
  };

  useEffect(() => {
    // Check if there are search results in local storage
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setSearchResults(JSON.parse(storedResults));
    }
  }, []);

  return (
    <motion.div
      exit="exit"
      variants={pageAnimations}
      initial="hidden"
      animate="show"
    >
      <SearchContainer>
        <form onSubmit={handleSearch}>
          <InputGroup>
            <SearchInput
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ButtonsContainer>
              <SearchButton type="submit">Search</SearchButton>
              <ClearSearchButton onClick={clearSearchResults}>
                Clear
              </ClearSearchButton>
            </ButtonsContainer>
          </InputGroup>
        </form>
        <ResultsContainer hoveredBookId={hoveredBookId}>
          {searchResults.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleSave={handleSave}
              setHoveredBookId={setHoveredBookId}
              isBookInList={isBookInList}
            />
          ))}
        </ResultsContainer>
      </SearchContainer>
    </motion.div>
  );
};

export default Search;
