import React, { useContext} from "react";
import BooksContext from "../Components/BooksContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableListItem from "../Components/DraggableListItem";
import styled from "styled-components";

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
  padding: 0;
  margin: 0;
  width: 500px;

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
    setSavedBooks(savedBooks.filter((book) => book.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <ListContainer>
        <Title>List of Books</Title>
        <ItemList>
          {savedBooks.map((book, index) => (
            <DraggableListItem
              key={book.id}
              id={book.id}
              text={book.volumeInfo.title}
              index={index}
              moveItem={moveItem}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              onDelete={handleDelete}
            />
          ))}
        </ItemList>
      </ListContainer>
    </DndProvider>
  );
};


export default List;