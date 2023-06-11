import React from "react";
import "./App.css";
import Button from "../Button";

const App = () => {
    return <div className="App">
        <div className="top">11:11</div>
        <div className="display">0</div>
        <div className="buttons">AC</div>
          <Button content="AC" />
        <div className="bottom">-</div>
    </div>
};

export default App;