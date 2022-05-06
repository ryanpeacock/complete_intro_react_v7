import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="brand">Adopt Me!</h1>
      <Pet name="Spice" animal="Cat" breed="Fluffy" />
      <Pet name="Skye" animal="Cat" breed="Fluffy" />
      <Pet name="Violet" animal="Cat" breed="Fluffy" />
    </div>
  );
};
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

render(<App />, document.getElementById("root"));
