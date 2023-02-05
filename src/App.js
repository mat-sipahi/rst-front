import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("./api/dplp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'text': text }),
      });
      const data = await response.text();
      setResult(data);
    } catch (error) {
      setResult("Error: " + error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        cols='80'
      />
      <button onClick={handleClick}>Parse with DPLP</button>
      <br/>
      <br />
      <textarea value={result} readOnly cols='80' rows='10' />
    </div>
  );
};

export default App;
