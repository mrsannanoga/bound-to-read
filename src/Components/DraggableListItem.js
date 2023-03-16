import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
import trashIcon from "../assets/img/trash.png";
import shopIcon from "../assets/img/shop.png";

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

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-image: url(${trashIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

const BuyButton = styled.a`
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-image: url(${shopIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const BookCover = styled.img`
  height: 60px;
  margin-right: 10px;
`;
const DraggableListItem = ({
  id,
  text,
  index,
  moveItem,
  thumbnail,
  onDelete,
  buyLink,
}) => {
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
      <IconContainer>
        {buyLink ? (
          <BuyButton href={buyLink} target="_blank" rel="noopener noreferrer" />
        ) : null}

        <DeleteButton onClick={() => onDelete(id)}></DeleteButton>
      </IconContainer>
    </ListItem>
  );
};

export default DraggableListItem;
