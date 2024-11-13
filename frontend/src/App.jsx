import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState('');
  useEffect(()=>{
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  })

  async function hello(){
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }

  return (
    <div className="App">
      <header className="App">
        <p>{message}</p>
        <p>AAAAA</p>
      </header>
    </div>
  );
}

export default App;
