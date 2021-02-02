import React ,{useEffect} from 'react';

export default function BookCard({ book, refreshBooks }) {
    const archiveBook = async () => {
        book.archived = true;
        try {
            await fetch('/.netlify/functions/updateBook', {
                method: 'PUT',
                body: JSON.stringify(book),
            });
            refreshBooks();
        } catch (error) {
            console.error('AHHH', error);
        }
    };

    const deleteBook = async () => {
        const id = book._id;
        try {
            await fetch('/.netlify/functions/deleteBook', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            });
            refreshBooks();
            window.location.reload();
        } catch (error) {
            console.error('AHHH', error);
        }
    };
    
  
    return (
        <div className="card mb-3" >
            <div className="card-header" > {book.name} </div>
            <div className="card-body" >
                <a href={book.url} > {book.url} </a>
                <p> {book.description} </p>
                <img src={book.image} alt="book url" style={{height: '220px'}} />
            </div>
            <div className="card-footer" >
                <button className="btn btn-warning mr-2"
                    onClick={archiveBook} >
                    Archived Book </button>
                <button className="btn btn-danger"
                    onClick={deleteBook} >
                    Delete Book </button>
            </div>
        </div>
    );
}