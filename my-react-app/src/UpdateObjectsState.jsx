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

  return (
    <div>
      <p>
        Favorite Car: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} />
      <input type="text" value={car.model} />
    </div>
  );
}

export default UpdateObjectsState;
