import React from 'react';
import BookCard from './BookCard';
export default function BookList({ books, refreshBooks }) {
    console.log(books);
    return ( 
    <div>
        <h2 className = "my-4" > Availabe Books </h2> 
        { !books.length ? <h1>No Data</h1> : books && books.filter((book) => !book.archived).map((book) => ( 
            <BookCard 
            key = { book._id }
            book = { book }
            refreshBooks = { refreshBooks }
            />
            ))
        } 
        
        <h2 className = "my-4" > Archived Books </h2>
         {

             !books.length? <h1>No archived book</h1> :  books && books.filter((book) => book.archived).map((book) => ( 
                <BookCard 
                 key = { book._id }
                 book = { book }
                 refreshBooks = { refreshBooks }
                 />
             ))
      
} </div>
);
}