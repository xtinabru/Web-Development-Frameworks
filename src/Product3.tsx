import React from "react";

function Product3(){
  const myprods = [ 
    { name: 'Bucket', quantity: 1, totalPrice: 15.99 },
    { name: 'Mop', quantity: 2, totalPrice: 29.90 },
    { name: 'Cleaning Sponges', quantity: 5, totalPrice: 9.95 }
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
  

export default Product3;