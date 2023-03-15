import React, { useState } from 'react';
import styled from 'styled-components';
import BookCard from '../Components/BookCard';



const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
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
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchTerm}&maxResults=20&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
      {
        method: 'GET',
      },
    );
    const data = await response.json();
    const filteredBooks = data.items.filter((item) => item.volumeInfo.language === 'en');
    setBooks(filteredBooks);
  };

  return (
    <SearchContainer>
      <h1>Search</h1>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Author name"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <Results>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Results>
    </SearchContainer>
  );
};

export default Search;
