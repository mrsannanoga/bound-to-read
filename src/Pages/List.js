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

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
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

const FormContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const FormInput = styled.input`
  font-size: 20px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const FormButton = styled.button`
  background-color: #2f80ed;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #1c6fd6;
  }
`;

const List = () => {
  const [items, setItems] = useState([]); // State for storing the list of books
  const [savedItems, setSavedItems] = useState([]); // State for storing saved items

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = event.target.item.value;
    if (newItem !== "") {
      setItems((prevItems) => [...prevItems, newItem]);
      event.target.item.value = "";
    }
  };

  const clearItems = () => {
    setItems([]); // Clearing the items list
  };
  
  const saveItems = () => {
    setSavedItems((prevSavedItems) => [...prevSavedItems, ...items]); // Saving the items to the savedItems list while preserving the existing saved items
    setItems([]); // Clearing the items list after saving
  };
  
  return (
    <ListContainer>
      <Title>Book List</Title>
      <FormContainer onSubmit={handleAddItem}>
        <FormInput
          type="text"
          placeholder="Add a book"
          name="item"
        />
        <FormButton type="submit">Add</FormButton>
</FormContainer>
<ItemList>
{items.map((item, index) => (
<Item key={index}>{item}</Item>
))}
</ItemList>
<ButtonContainer>
<Button onClick={clearItems}>Clear</Button>
<Button onClick={saveItems}>Save</Button>
</ButtonContainer>
<Title>Saved Items</Title>
<ItemList>
{savedItems.map((item, index) => (
<Item key={index}>{item}</Item>
))}
</ItemList>
</ListContainer>
);
};

export default List;

