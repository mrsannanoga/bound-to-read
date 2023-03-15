import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Draggable } from "react-draggable";

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
  background-color: ${(props) => (props.isDragging ? "#ccc" : "white")};
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

const FormContainer = styled.form`
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
  const [items, setItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const savedItemsFromStorage = JSON.parse(localStorage.getItem("savedItems"));
    if (savedItemsFromStorage) {
      setSavedItems(savedItemsFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }, [savedItems]);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = event.target.item.value;
    if (newItem !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { id: Math.random(), content: newItem },
      ]);
      event.target.reset();
    }
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleDrag = (index) => (e, ui) => {
    const { x, y } = ui;
setItems((prevItems) => {
  const newItems = [...prevItems];
  newItems[index].x = x;
  newItems[index].y = y;
  return newItems;
});
};

return (
<ListContainer>
<Title>List of Books</Title>
<ItemList>
{items.map((item, index) => (
<Draggable key={item.id} onDrag={handleDrag(index)}>
<Item isDragging={item.isDragging}>
{item.content}
<Button onClick={() => handleDeleteItem(item.id)}>Delete</Button>
</Item>
</Draggable>
))}
</ItemList>
<FormContainer onSubmit={handleAddItem}>
<FormInput type="text" name="item" placeholder="Book title" />
<FormButton type="submit">Add Book</FormButton>
</FormContainer>
<ButtonContainer>
<Button onClick={() => setSavedItems(items)}>Save List</Button>
<Button onClick={() => setItems(savedItems)}>Load List</Button>
</ButtonContainer>
</ListContainer>
);
};

export default List;