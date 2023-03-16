import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { hoverVariants } from "../Animations";
import placeholderImage from "../assets/img/placeholder.webp";

const CardContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 350px;
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
  width: 100%;
`;

const SaveButton = styled.button`
  background-color: ${(props) => (props.saved ? "green" : "blue")};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
`;

const BookCard = ({ book, handleSave, setHoveredBookId, isBookInList }) => {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail || placeholderImage;
  const authors = book.volumeInfo.authors || [];
  return (
    <CardContainer
      data-id={book.id}
      onMouseEnter={() => setHoveredBookId(book.id)}
      onMouseLeave={() => setHoveredBookId(null)}
    >
      <Card whileHover="hover" variants={hoverVariants} initial="initial">
        <BookCover src={thumbnail} alt={book.volumeInfo.title} />
        <BookInfo>
          <BookTitle>{book.volumeInfo.title}</BookTitle>
          <BookDetails>
            <BookAuthor>{authors.join(", ")}</BookAuthor>
          </BookDetails>
          <SaveButton
            onClick={() => handleSave(book)}
            disabled={isBookInList(book.id)}
            saved={isBookInList(book.id)}
          >
            Save to list
          </SaveButton>
        </BookInfo>
      </Card>
    </CardContainer>
  );
};

export default BookCard;
