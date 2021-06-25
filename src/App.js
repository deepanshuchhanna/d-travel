import React from "react";
import "./App.css";
import C1 from "./Components/C1";
import C2 from "./Components/C2";
import C3 from "./Components/C3";

function App() {
  return (
    <>
      <div className="App">
        <header
          style={{
            backgroundColor: "white",
            width: "99vw",
            height: "100vh",
          }}
        >
          <img
            src="./images/a.jpg"
            alt="pic"
            style={{
              width: "99vw",
              height: "100vh",
              opacity: "1 ",
            }}
          />{" "}
          <C1 />
          <C2 />
          <C3 />
        </header>
      </div>
    </>
  );
}

export default App;
