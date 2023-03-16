import React from 'react';

function BookCard({ book, handleSave, setHoveredBookId, isBookInList }) {
  const thumbnail = book?.imageLinks?.thumbnail;
  const title = book?.title;
  const authors = book?.authors?.map(author => author.name).join(', ');

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={() => handleSave(book)}>Save</button>
      <div
        onMouseEnter={() => setHoveredBookId(book.id)}
        onMouseLeave={() => setHoveredBookId(null)}
      >
        {thumbnail && <img src={thumbnail} alt={title} />}
        <p style={{ fontWeight: 'bold' }}>{title}</p>
        <p style={{ fontStyle: 'italic' }}>{authors}</p>
        {isBookInList(book.id) && <p style={{ color: 'green' }}>Already saved</p>}
      </div>
    </div>
  );
}

export default BookCard;
