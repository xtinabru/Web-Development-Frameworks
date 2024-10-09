import React, { useEffect } from 'react'
import { useState } from 'react'
import UserFilter from './UserFilter'
import UserList from './UserList'

export default function Ex102UserListFilter() {

  const[filterValue, setFilterValue] = useState('');
  const[userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data =>{
      console.log(data.users)
      setUserData(data.users)
    })
  }, []);


  function receiveFilterValueFromChild(newFilterValue : string){
    setFilterValue(newFilterValue);
  }

  function userDataFilterLogic(user) {

    if(filterValue == ''){
       return true;
    }

    if (filterValue == user.lastName){
      return true;
    }
    return false;
  }

  return (
    <div>
      <h2>
        This is exercise 10/2
      </h2>
      <UserFilter giveFilterValueToParent={receiveFilterValueFromChild}/>
      <UserList users={ userData.filter(userDataFilterLogic)}/>
    </div>
  )
}
