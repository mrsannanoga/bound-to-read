import React, { useState, useContext } from "react";

import styled from "styled-components";
import BookCard from "../Components/BookCard";
// Import BooksContext
import BooksContext from "../Components/BooksContext";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  font-size: 2rem;
  padding: 0.5rem;
  width: 40rem;

  border: 1px solid #ccc;
  border-radius: 40px;
`;

const SearchButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: rgb(2, 2, 72);
  color: #fff;
  border: none;
  width: 10rem;
  border-radius: 40px;
  cursor: pointer;
`;

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Use the BooksContext
  const { savedBooks, setSavedBooks } = useContext(BooksContext);

  // Define handleSave
  const handleSave = (book) => {
    setSavedBooks([...savedBooks, book]);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchTerm}&maxResults=20&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    const filteredBooks = data.items.filter(
      (item) => item.volumeInfo.language === "en"
    );
    setBooks(filteredBooks);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="  search author or title"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <Results>
        {books.map((book) => (
          // Pass the handleSave function as a prop to the BookCard component
          <BookCard key={book.id} book={book} handleSave={handleSave} />
        ))}
      </Results>
    </SearchContainer>
  );
};

export default Search;
