import React from 'react';
import './App.css';

function App() {
  function buttonClick() {
    console.log("Button clicked")
  }

  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <button type="button" onClick={buttonClick}>to the collection</button>
        <button type="button" onClick={buttonClick}>shop all bags</button>
        <button type="button" onClick={buttonClick} disabled>pre-order</button>
      </nav>
    </>
  );
}

export default App;



