import React, { useState, useEffect } from "react";

function UseEffectReturn() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Even Listener Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>
        Width : {width}
        <br />
        Height : {height}
      </p>
    </div>
  );
}

export default UseEffectReturn;
