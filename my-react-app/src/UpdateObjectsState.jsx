import React, { useState } from "react";

function UpdateObjectsState() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Toyota",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar((prevCar) => ({ ...prevCar, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((prevCar) => ({ ...prevCar, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  }

  // Event handling
  // State update
  // Spread operators
  // Updater function
  // Onchange (inputs)

  return (
    <div>
      <p>
        Favorite Car: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
}

export default UpdateObjectsState;
