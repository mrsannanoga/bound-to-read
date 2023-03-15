import React, { useState } from "react";
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
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Item = styled.li`
  padding: 10px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: #2f80ed;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #1c6fd6;
  }
`;

const List = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <ListContainer>
      <Title>List</Title>
      <ItemList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </ItemList>
      <ButtonContainer>
        <Button onClick={() => addItem("New Item")}>Add Item</Button>
        <Button onClick={() => clearItems()}>Clear List</Button>
      </ButtonContainer>
    </ListContainer>
  );
};

export default List;
