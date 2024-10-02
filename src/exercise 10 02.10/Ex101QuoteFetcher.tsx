import React, { useEffect, useState} from 'react';

export default function Ex101QuoteFetcher() {

  const[quote, setQuote] = React.useState('')

  useEffect(getMeTheQuote);

  function getMeTheQuote(){

    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content)
      });
    
  }

  return (
    <div>
      <h1>Ex 10.1 Quote Fetcher</h1>
      <div>
        Here is the quote: { quote }
      </div>
    </div>
  )
}
