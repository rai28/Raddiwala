import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { HashRouter, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div>
        <div className="header-content">
          <h1>Raddiwala</h1>
        </div>
      </div>
      <main>
        <Route path="/" component={HomeScreen} exact />
      </main>
    </HashRouter>
  );
}

export default App;
