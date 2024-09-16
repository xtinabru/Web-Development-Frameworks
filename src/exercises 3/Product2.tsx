import React from "react";

function Product2(){
  const myprods = [ 
  { name: 'Vacuum Cleaner', quantity: 1, totalPrice: 120.00 },
  { name: 'Antibacterial Wipes', quantity: 6, totalPrice: 11.94 },
  { name: 'Tile Cleaner', quantity: 1, totalPrice: 14.99 }
  ]
  return (
    <div>
     {myprods.map((prod, index)=>(
       <div>
         <p>{prod.name}</p>
         <p>{prod.quantity}</p>
         <p>{prod.totalPrice}</p>
       </div>
     ))}
    </div> 
   )
}
  

export default Product2;