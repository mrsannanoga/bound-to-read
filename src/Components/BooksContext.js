/**
 * BooksContext is a React Context that provides a centralized state management
 * for the saved books list across the application. It allows components to
 * access and manipulate the saved books list without passing props through
 * multiple levels of the component tree.
 *
 * It contains the following:
 * 1. savedBooks: An array of books saved from the Search page.
 * 2. addToSavedBooks: A function to add a book to the savedBooks array.
 * 3. removeFromSavedBooks: A function to remove a book from the savedBooks array.
 */


import React, { createContext, useState, useEffect } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  // Retrieve saved books from localStorage or initialize an empty array
  const [savedBooks, setSavedBooks] = useState(() => {
    const storedBooks = localStorage.getItem("savedBooks");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  // Save the savedBooks to localStorage when the list is updated
  useEffect(() => {
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
  }, [savedBooks]);

  return (
    <BooksContext.Provider value={{ savedBooks, setSavedBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
