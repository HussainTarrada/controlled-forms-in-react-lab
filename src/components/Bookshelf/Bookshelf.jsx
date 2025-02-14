import React from 'react'
import { useState } from 'react';

function Bookshelf() {


    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

      const [newBooks, setNewBooks] = useState([
        { title: '', author: '' },
      ]);
      
      async function handleInputChange(event){
        console.log(event.target.value)
        setNewBooks({...newBooks, [event.target.name]: event.target.value})
      }

      async function handleSubmit(event){
        event.preventDefault()
        setBooks([{...books}, {...newBooks}])
        setNewBooks( [{ title: '', author: '' }])
      }

  return (
    <>
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
   <form onSubmit={handleSubmit}>
    <label htmlFor="Title">Title: </label>
    <input type="text" 
    name='Title' 
    id='Title' 
    value={newBooks.title} 
    onChange={handleInputChange}/>

    <label htmlFor="Author">Author: </label>
    <input type="text" 
    name='Author' 
    id='Author' 
    value={newBooks.author} 
    onChange={handleInputChange}/>

    <button type='submit'>Submit new book</button>
    </form>  
    </div>
  <div className="bookCardsDiv">
    {books.map((book)=>
    <div key={book.title}>
        <ul>
               <p>Book Title: {book.title}</p>
               <p>Book Author: {book.author}</p>
        </ul>
        </div>
    )}
  </div>
</div>


    </>
  )
}

export default Bookshelf
