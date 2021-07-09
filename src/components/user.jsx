import React, { useState, useEffect } from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("earth");

  // componentDidMount
  useEffect(() => {
    // heavy computation
    console.log("component mounting");
    return console.log("bye bye");
  });

  // componentDidUpdate
  // componentShouldUpdate
  useEffect(() => {
    console.log("Planet changes");
  }, []);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button onClick={() => setPlanet("pluto")}>{planet}</button>
    </div>
  );
};
export default User;
