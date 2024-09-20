import React from 'react'
import { useState } from 'react'

interface MyBooksProps {
  books: string []
}

export default function Ex82DynamicBookList() {

  const [books, setBooks] = useState<string[]>(["War and Peace", "The Who", "Alice in Wonderland"]);

  const [bookInputText, setBookInputText] = useState<string>("");

  function addNewBook(){
    // create a clone of existing array in state
    const newBookArray = [...books];
    newBookArray.push(bookInputText);
    setBooks(newBookArray);
  }

  return (
    <div>
      <h1>Ex82</h1>
      <div>
        <input type="text" placeholder='Book title' value={bookInputText} onChange={(event) => setBookInputText(event.target.value)} />
        <button onClick={addNewBook}>Click to add a book </button>
      </div>
      <ul>
      {books.map((book, index) => <li key={index}>{book}</li>)}
      </ul>
    </div>)
}




  
  
  