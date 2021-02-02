import React, { useEffect, useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
//Grab all of the books
//display all of the books
//add delete and archive functionality
function App() {
    const [books, setBooks] = useState([]);
    const getBooks = async () => {
        try {
            const res = await fetch('/.netlify/functions/getBooks');
            const books = await res.json();
            setBooks(books);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getBooks();
        console.log(books);
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">2021 Books List</h1>
            <BookForm refreshBooks={getBooks} />
            <BookList books={books} refreshBooks={getBooks} />
        </div>
    );
}

export default App;