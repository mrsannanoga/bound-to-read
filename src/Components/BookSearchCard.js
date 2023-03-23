// Import necessary libraries and components
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { hoverVariants } from "../Animations";
import placeholderImage from "../assets/img/placeholder.webp";
import LibraryIcon from "../../src/assets/img/library.svg";

const CardContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  height: 100%;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 330px;
`;

const BookCover = styled.img`
  width: auto;
  height: 200px;
  object-fit: cover;
`;

const BookTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const BookAuthor = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  text-align: center;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const BookDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;
`;

const OpenLibraryButton = styled.button`
  background-color: #8e5c4c;

  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 1rem;
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

const BookSearchCard = ({
  book,
  handleSave,

  setHoveredBookId,
  isBookInList,
}) => {
  const { title, authors, imageLinks } = book.volumeInfo;
  const authorNames =
    authors && authors.length > 0 ? authors[0].name : "Unknown Author";

  const thumbnail = imageLinks?.thumbnail || placeholderImage;
  const openLibraryUrl = `https://openlibrary.org/books/${book.id}`;
  return (
    <CardContainer
      data-id={book.id}
      onMouseEnter={() => setHoveredBookId(book.id)}
      onMouseLeave={() => setHoveredBookId(null)}
    >
      <Card whileHover="hover" variants={hoverVariants} initial="initial">
        <BookCover src={thumbnail} alt={title} />
        <BookInfo>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>Author: {authorNames}</BookAuthor>
        </BookInfo>
        <BookDetails>
          <a href={openLibraryUrl} target="_blank" rel="noopener noreferrer">
            <OpenLibraryButton>
              <img src={LibraryIcon} alt="Library Icon" />
            </OpenLibraryButton>
          </a>
        </BookDetails>
      </Card>
    </CardContainer>
  );
};

export default BookSearchCard;
