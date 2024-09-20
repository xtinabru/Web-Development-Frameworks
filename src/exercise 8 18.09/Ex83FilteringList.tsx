import { useState } from 'react'

export default function Ex83FilteringList() {

  const [books] = useState<string[]>(["War and Peace", "The Who", "Alice in Wonderland"]);

  const [filterText, setFilterText] = useState<string>("");

  const filteredBooks = books.filter(book => 
    book.toLowerCase().includes(filterText.toLowerCase()) 
  );

  return (
    <div>
      <h2>Ex83 Books List With Filter </h2>
      <input type="text" placeholder="Enter text to filter books"
      value={filterText} 
      onChange={(book) => setFilterText(book.target.value)}/>

      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>{book}</li> // 
        ))}
      </ul>
         
    </div>)
}