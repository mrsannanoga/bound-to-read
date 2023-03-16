import React, { useState, useEffect } from "react";
import BookCard from "../Components/BookCard";
import BooksContext from "../Components/BooksContext";
import { useContext } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;
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
  font-size: 2rem;
  margin-right: 1rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchButton = styled.button`
  background-color: #fe7f2d;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
const ClearSearchButton = styled.button`
  background-color: #a83232;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
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
      filter: blur(3px);
      
    }
  `}
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setSavedBooks } = useContext(BooksContext);
  const [hoveredBookId, setHoveredBookId] = useState(null);

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
          />
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Search;
