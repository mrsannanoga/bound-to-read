// Import necessary libraries and components
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { modalAnimation } from "../Animations";

// Styled-components for the book info modal
// ModalOverlay is the background overlay for the modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ModalContent is the main container for the modal content

const ModalContent = styled(motion.div)`
  font-size: 2.5rem;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  position: relative;
  h2 {
    background-color: #8e5c4c;
    color: white;
    border-radius: 10px;

    padding: 5px 10px;
    font-size: 3rem;
  }
`;

// Label is the styled component for field labels in the modal

const Label = styled.span`
  font-weight: bold;
  background-color: #424242;
  padding: 5px 10px;
  width: 10rem;
  border-radius: 4px;
  margin-right: 8px;
  color: white;
`;

// Value is the styled component for field values in the modal
const Value = styled.span`
  font-size: 1.2rem;
  display: inline-block;
`;

// CloseButton is the styled component for the close button in the modal
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  background: none;
  color: #b4a29e;
  border: none;
  font-size: 50px;
  cursor: pointer;
`;
// ReviewLink is the styled component for the book preview link
const ReviewLink = styled.a`
  display: inline-block;
  color: #8e5c4c;
  text-decoration: none;
`;

// BookInfoModal component receives a book object and close function as props
const BookInfoModal = ({ book, close }) => {
  // Retrieve ISBN information from the book object
  const isbnInfo = book.volumeInfo.industryIdentifiers;
  // Function to display formatted ISBN information
  const displayISBN = (isbnArray) => {
    if (!isbnArray) {
      return "";
    }
    return isbnArray
      .map((isbn) => {
        return `${isbn.type}: ${isbn.identifier}`;
      })
      .join(", ");
  };
  return (
    // Render the modal overlay and content with click event listeners for closing
    <ModalOverlay onClick={close}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalAnimation}
      >
        <CloseButton onClick={close}>&times;</CloseButton>
        <h2>{book.volumeInfo.title}</h2>
        <p>
          <Label>Author(s):</Label>
          <Value>
            {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
          </Value>
        </p>
        <p>
          <Label>Publisher:</Label>
          <Value>{book.volumeInfo.publisher}</Value>
        </p>
        <p>
          <Label>Published Date:</Label>
          <Value>{book.volumeInfo.publishedDate}</Value>
        </p>
        <p>
          <Label>Description:</Label>
          <Value>{book.volumeInfo.description}</Value>
        </p>
        <p>
          <Label>Page Count:</Label>
          <Value>{book.volumeInfo.pageCount}</Value>
        </p>
        <p>
          <Label>Categories:</Label>
          <Value>
            {book.volumeInfo.categories &&
              book.volumeInfo.categories.join(", ")}
          </Value>
        </p>
        <p>
          <Label>ISBN:</Label>
          <Value>{displayISBN(isbnInfo)}</Value>
        </p>
        <p>
          <Label>Language:</Label>
          <Value>{book.volumeInfo.language}</Value>
        </p>
        <ReviewLink
          href={book.volumeInfo.previewLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Preview Book
        </ReviewLink>
      </ModalContent>
    </ModalOverlay>
  );
};

export default BookInfoModal;
