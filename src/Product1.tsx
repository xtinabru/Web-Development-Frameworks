import React from "react";

function Product1(){
  const myprods = [ 
    { name: 'Floor Cleaner', quantity: 1, totalPrice: 12.00 },
    { name: 'Glass Cleaner', quantity: 2, totalPrice: 8.50 },
    { name: 'Cleaning Wipes', quantity: 3, totalPrice: 6.99 }
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
  
export default Product1;