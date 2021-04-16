import React from "react";

import "./App.css";
import Button from "./components/Button";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <Button label="Click" onClick={() => console.log("Hello world!")} />
      <br />
      <br />
      <Accordion
        label="Expand"
        onClick={() => console.log("Clicked accordion")}
      >
        <p>Accordion content.</p>
      </Accordion>
    </div>
  );
}

export default App;
