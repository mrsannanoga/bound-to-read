import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";

const ListItem = styled.li`
  padding: 10px;
  font-size: 30px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) => (props.isDragging ? "#ccc" : "white")};
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
`;

const BookCover = styled.img`
  height: 60px;
  margin-right: 10px;
`;
const DraggableListItem = ({ id, text, index, moveItem, thumbnail, onDelete }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "listItem",
      item: { id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const [, drop] = useDrop({
      accept: "listItem",
      hover(item, monitor) {
        if (item.index === index) return;
        moveItem(item.index, index);
        item.index = index;
      },
    });
  
    const ref = useRef(null);
    drag(drop(ref));
  
    return (
      <ListItem ref={ref} isDragging={isDragging}>
        <BookCover src={thumbnail} alt={text} />
        {text}
        <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
      </ListItem>
    );
  };
  
  export default DraggableListItem;
