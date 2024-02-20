import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [term, setTerm] = useState("");

  const handleClick = () => {
    setTerm(name)

  }

  const handleInput = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {term} </h1>
      <input type="text" placeholder="What's your name?" onChange={handleInput} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;