import React from 'react';
import './App.css';
import MyBooks from './exercise 8 18.09/MyBooks';

function App() {

  const books = ["War and Peace", "The Who", "Alice in Wonderland"]

  return (
    <div>
    <MyBooks books={books}/>
    </div>
  );
}

export default App;
