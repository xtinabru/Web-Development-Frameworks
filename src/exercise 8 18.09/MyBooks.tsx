import React from 'react'


interface MyBooksProps {
  books: string []
}
export default function MyBooks({books}: MyBooksProps ){

  return(
    <div>
      <ul>
      {books.map((book, index) => <li key={index}>{book}</li>)}
      </ul>
    </div>)
  
}
  
  
  