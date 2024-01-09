import React from "react";
import "./App.css";
import Pull from "./components/Pull";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pull testo="ola" />
      </header>
      <ImageComponent src="https://tse2.mm.bing.net/th?id=OIP.-Jx-biFLKeOX8oQS5WhOFwHaE8&pid=Api&P=0&h=180" />
    </div>
  );
}

export default App;
