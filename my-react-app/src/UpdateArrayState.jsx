import React, { useState } from "react";

function UpdateArrayState() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  function handleAddFruit() {
    const newFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";

    setFruits((prevFruit) => [...prevFruit, newFruit]);
  }

  function handleRemoveFruit(index) {
    setFruits(fruits.filter((_, i) => i !== index));
  }

  return (
    <div>
      <p>My Fruits</p>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => handleRemoveFruit(index)}>
            {fruit}
          </li>
        ))}
      </ul>
      <input type="text" id="fruitInput" placeholder="Enter fruit name" />
      <button onClick={handleAddFruit}> Add fruit</button>
    </div>
  );
}

export default UpdateArrayState;
