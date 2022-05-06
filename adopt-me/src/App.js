import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="brand">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//     React.createElement(Pet, { name: "Spice", animal: "Cat", breed: "Fluffy" }),
//     React.createElement(Pet, { name: "Skye", animal: "Cat", breed: "Fluffy" }),
//     React.createElement(Pet, {
//       name: "Violet",
//       animal: "Cat",
//       breed: "Fluffy",
//     }),
//   ]);
// };
