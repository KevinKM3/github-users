import React from "react";
import Search from "./components/Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
