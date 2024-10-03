import React from 'react';
import './App.css';
import { useState } from 'react'
import Ex102UserFilter from './exercise 10 02.10/Ex102UserFilter';
import Ex102UserList from './exercise 10 02.10/Ex102UserList';


function App() {



  return (
    <div>
   <Ex102UserFilter onFilter={setFilterText}/>
   <Ex102UserList filterText={filterText}/>
    </div>
  );
}


export default App;
