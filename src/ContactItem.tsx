import React from "react";

function ContactItem(){
  const contacts = [
    { name: 'John Doe', address: '123 Main St, Springfield' },
    { name: 'Jane Smith', address: '456 Oak St, Metropolis' },
    { name: 'Alice Johnson', address: '789 Pine St, Gotham' },
    { name: 'Alice Bowl', address: '785 Pine St, Gotham' }
  ]

  return (
    <div>
      {contacts.map((contact, index)=>(
        <div key={index} className="contact-item">
          <p><strong>{ contact.name }</strong></p>
          <p>{ contact.address }</p>
        </div>
      ))}
    </div>
  )

}

export default ContactItem;