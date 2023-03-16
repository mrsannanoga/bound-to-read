import React, { useContext } from "react"; 
import BooksContext from "../Components/BooksContext";


import styled from "styled-components";
import Draggable from "react-draggable";


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
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Item = styled.li`
  padding: 10px;
  font-size: 30px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  background-color: ${(props) => (props.isDragging ? "#ccc" : "white")};
`;

const BookCover = styled.img`
  height: 60px;
  margin-right: 10px;
`;

const List = () => {
  // Use the BooksContext
  const { savedBooks } = useContext(BooksContext);

  return (
    <ListContainer>
      <Title>List of Books</Title>
      <ItemList>
      {savedBooks.map((book, index) => (
  <Draggable key={book.id} axis="y">
    <Item isDragging={book.isDragging}>
      <BookCover src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      {book.volumeInfo.title}
    </Item>
  </Draggable>
))}
      </ItemList>
    </ListContainer>
  );
};

export default List;