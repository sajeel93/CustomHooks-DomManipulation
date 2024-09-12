import { useState } from "react";
import { PersonProps } from "./types/person";
import { useIncrement, useDecrement } from "./customHooks/useCounter";
const Person = (props: PersonProps) => {
  const { name, experience, isMarried } = props;
  const [counter, setCounter] = useState(9);

  const increment = useIncrement(counter, setCounter);
  const decrement = useDecrement(counter, setCounter);

  // Dom Manipulation
  const addElement = () => {
    const mainContainer = document.getElementById("main_container");
    const createElement = document.createElement("h5");
    const h5text = document.createTextNode("Hello, I'm h5");
    createElement.appendChild(h5text);
    mainContainer?.appendChild(createElement);

    // For Inset Before
    // const h1Element = document.getElementsByTagName("h1");
    // console.log(h1Element, "h1Element");
    // mainContainer?.insertBefore(createElement, h1Element[0]);
  };

  return (
    <>
      <h1>Name: {name}</h1>
      {/* <h1>Experience: {experience}</h1> */}
      <h1>Married/Single: {isMarried ? "Married" : "Single"}</h1>

      <br />

      <h1>Custom Hooks (Usage)</h1>
      <h2>Experience: {counter}</h2>
      <button onClick={increment}>Increment Experience</button>
      <button onClick={decrement}>decrement Experience</button>

      <br />

      <h1>Dom Manipulation</h1>
      <button onClick={addElement}>Add Element</button>
    </>
  );
};

export default Person;
