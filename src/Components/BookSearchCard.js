import React from 'react';

function BookCard({ book, handleSave, setHoveredBookId, isBookInList }) {
const thumbnail = book?.imageLinks?.thumbnail;
const title = book?.title;
const authors = book?.authors?.map(author => author.name).join(', ');

// Add a unique id property to the book object if it doesn't already exist
if (!book.id) {
book.id = Date.now(); // Assign a timestamp as the id
}

// Check if the book object has an id property before using it
const bookId = book.id ? book.id : null;

return (
<div style={{ marginTop: '10px' }}>
<button onClick={() => handleSave(book)}>Save</button>
<div
onMouseEnter={() => setHoveredBookId(bookId)}
onMouseLeave={() => setHoveredBookId(null)}
>
{thumbnail && <img src={thumbnail} alt={title} />}
<p style={{ fontWeight: 'bold' }}>{title}</p>
<p style={{ fontStyle: 'italic' }}>{authors}</p>
{isBookInList(bookId) && <p style={{ color: 'green' }}>Already saved</p>}
</div>
</div>
);
}

export default BookCard;