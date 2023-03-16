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


import { createContext, useState } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [savedBooks, setSavedBooks] = useState([]);

  return (
    <BooksContext.Provider value={{ savedBooks, setSavedBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
