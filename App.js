 /*
    <div id="parent">
        <div id="child">
            <h1>Im h1 tag</h1>
            <h2> Im h2 tag</h2>
        </div>
        <div id="child">
            <h1>Im h1 tag</h1>
            <h2> Im h2 tag</h2>
        </div>
    </div>


 */
const heading = React.createElement("h1", {id:'heading'}, "Namaste React");
  console.log(heading);

  const parent = React.createElement("div",
            {id:"parent"},
                [React.createElement("div",{id:"child1"},
                 [React.createElement("h1",{},"Im h1 tag"),
                  React.createElement("h2",{},"Im h2 tag")]),
                  React.createElement("div",{id:"child2"},
                 [React.createElement("h1",{},"Im h1 tag"),
                  React.createElement("h2",{},"Im h2 tag")])] 
                 );

  const root = ReactDOM.createRoot(document.getElementById("root"));
 
  root.render(parent);