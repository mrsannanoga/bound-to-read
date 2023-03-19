import React, { useContext } from "react";
import BooksContext from "../Components/BooksContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableListItem from "../Components/DraggableListItem";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimations } from "../Animations";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ItemList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  width: 30%;

  border-radius: 8px;
`;

const List = () => {
  // Use the BooksContext
  const { savedBooks, setSavedBooks } = useContext(BooksContext);
  
  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = savedBooks[dragIndex];
    const newItems = [...savedBooks];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);
    setSavedBooks(newItems);
  };

  const handleDelete = (id) => {
    setTimeout(() => {
      setSavedBooks((prevBooks) => {
        const updatedBooks = prevBooks.filter((book) => book.id !== id);
        localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
        return updatedBooks;
      });
    }, 1000);
  };

  return (
    <motion.div
      exit="exit"
      variants={pageAnimations}
      initial="hidden"
      animate="show"
    >
      <DndProvider backend={HTML5Backend}>
        <ListContainer>
          <Title>To be read...</Title>
          <ItemList>
            {savedBooks.map((book, index) => (
              <DraggableListItem
                key={book.id}
                id={book.id}
                text={book.volumeInfo.title}
                index={index}
                moveItem={moveItem}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                onDelete={() => handleDelete(book.id)}
                buyLink={book.saleInfo && book.saleInfo.buyLink}
                book={book}
              />
            ))}
          </ItemList>
        </ListContainer>
      </DndProvider>
    </motion.div>
  );
};

export default List;
