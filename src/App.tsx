import React from "react";

import "./App.css";
import Button from "./components/Button";
import Accordion from "./components/Accordion";
import AccordionStyled from "./components/AccordionStyled";

function App() {
  return (
    <div className="App">
      <Button label="Click" onClick={() => console.log("Hello world!")} />
      <br />
      <br />
      <Accordion
        label="Expand 1"
        onClick={() => console.log("Clicked accordion")}
      >
        <p>This accordion uses conditional rendering for the content.</p>
      </Accordion>
      <br />
      <br />
      <AccordionStyled
        label="Expand 2"
        onClick={() => console.log("Clicked accordion")}
      >
        <p>This accordion uses CSS styles to show the content.</p>
      </AccordionStyled>
    </div>
  );
}

export default App;
