import React, { useState } from "react";

function MyComponents() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeName = () => {
    setName("Cedric");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleLoggedInBtn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={changeName}>Change Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment</button>

      <p>Is Logged In: {isLoggedIn ? "Yes" : "No"}</p>
      <button onClick={toggleLoggedInBtn}>Toggle</button>
    </div>
  );
}

export default MyComponents;
