import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="list">

            {
                props.books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeinfo.imageLinks.thumbnail}
                        title={book.title}
                        author={book.authors}
                        published={book.published.publishedDate}
                    />
                })
            }

        </div>
    )
}

export default BookList;