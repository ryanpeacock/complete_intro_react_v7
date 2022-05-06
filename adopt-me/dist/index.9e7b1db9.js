const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {
            id: "brand"
        }, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Spice",
            animal: "Cat",
            breed: "Fluffy"
        }),
        React.createElement(Pet, {
            name: "Skye",
            animal: "Cat",
            breed: "Fluffy"
        }),
        React.createElement(Pet, {
            name: "Violet",
            animal: "Cat",
            breed: "Fluffy"
        }), 
    ]);
};
const myRenderedApp = React.createElement(App);
ReactDOM.render(myRenderedApp, document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
