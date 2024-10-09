import { useState } from "react"

export default function UserFilter({ giveFilterValueToParent }: { giveFilterValueToParent: (filterValue: string) => void}) {

  const[filterValue, setFilterValue] = useState('');

  function filterClicked(){

    console.log('filter clicked');
    console.log(filterValue);

    giveFilterValueToParent(filterValue)

  }

  function updateFilterValue(event){
    setFilterValue(event.target.value)

  }

  return (
    <div>
      <input type="text" value={filterValue} onChange={updateFilterValue} />
      <button onClick={ filterClicked }>Filter</button>
    </div>
  )
}
