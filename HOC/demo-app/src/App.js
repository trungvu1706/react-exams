import React from "react";
import "./App.css";

import WithFadeInWhenInView from "./components/withFadeInWhenInView";
import items from "./components/Items";

function App() {
  return (
    <div className="App">
      {items.map((item, index) => (
        <WithFadeInWhenInView key={index}>
          <div className="box" style={{ backgroundColor: item }}>
            <span>{item}</span>
          </div>
        </WithFadeInWhenInView>
      ))}
    </div>
  );
}

export default App;
