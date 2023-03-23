// Import necessary libraries and components
import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { motion } from "framer-motion";
import styled from "styled-components";
import trashIcon from "../assets/img/trash.svg";
import shopIcon from "../assets/img/shop.svg";
import InfoIcon from "../assets/img/Info.svg";
import BookInfoModal from "./BookInfoModal";
import { listItemVariants } from "../Animations";

// Styled-components for the draggable list item
const ListItem = styled(motion.li).attrs({ variants: listItemVariants })`
  padding: 10px;
  font-size: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background-color: ${(props) => (props.isDragging ? "#ccc" : "white")};
  margin-bottom: 20px;
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
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

const BuyButton = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-image: url(${shopIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
const InfoButton = styled.button`
  background-image: url(${InfoIcon});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const BookCover = styled.img`
  height: 60px;
  margin-right: 10px;
`;

// DraggableListItem component receives several props to manage item data, drag and drop functionality, and interactions
const DraggableListItem = ({
  id,
  text,
  index,
  moveItem,
  thumbnail,
  onDelete,
  buyLink,
  book,
}) => {
  // useState hooks for managing the deleted state and modal visibility
  const [isDeleted, setIsDeleted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // Function to toggle the modal visibility
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // useDrag hook for handling drag functionality
  const [{ isDragging }, drag] = useDrag({
    type: "listItem",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  // useDrop hook for handling drop functionality
  const [, drop] = useDrop({
    accept: "listItem",
    hover(item, monitor) {
      if (item.index === index) return;
      moveItem(item.index, index);
      item.index = index;
    },
  });
  // useRef for the DOM element reference
  const ref = useRef(null);
  drag(drop(ref));

  return (
    <ListItem
      ref={ref}
      isDragging={isDragging}
      variants={listItemVariants}
      animate={isDeleted ? "deleted" : "initial"}
      onAnimationComplete={() => {
        if (isDeleted) {
          onDelete(id);
        }
      }}
    >
      <BookCover src={thumbnail} alt={text} />
      {text}
      <IconContainer>
        <InfoButton onClick={toggleModal}></InfoButton>
        {modalOpen && <BookInfoModal book={book} close={toggleModal} />}

        {buyLink ? (
          <BuyButton href={buyLink} target="_blank" rel="noopener noreferrer" />
        ) : null}

        <DeleteButton onClick={() => setIsDeleted(true)} />
      </IconContainer>
    </ListItem>
  );
};

export default DraggableListItem;
