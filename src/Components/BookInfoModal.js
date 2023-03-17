import React from "react";
import styled from "styled-components";

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

const ModalContent = styled.div`
  font-size: 3rem;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  position: relative;
  h2 {
    font-size: 4rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 50px;
  cursor: pointer;
`;

const BookInfoModal = ({ book, close }) => {
    return (
      <ModalOverlay onClick={close}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={close}>&times;</CloseButton>
          <h2>{book.volumeInfo.title}</h2>
          <p><strong>Author(s):</strong> {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}</p>
          <p><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
          <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
          <p><strong>Description:</strong> {book.volumeInfo.description}</p>
          <p><strong>Page Count:</strong> {book.volumeInfo.pageCount}</p>
          <p><strong>Categories:</strong> {book.volumeInfo.categories && book.volumeInfo.categories.join(", ")}</p>
          <p><strong>Average Rating:</strong> {book.volumeInfo.averageRating}</p>
          <p><strong>Ratings Count:</strong> {book.volumeInfo.ratingsCount}</p>
          <p><strong>Language:</strong> {book.volumeInfo.language}</p>
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview Book</a>
        </ModalContent>
      </ModalOverlay>
    );
  };

export default BookInfoModal;
