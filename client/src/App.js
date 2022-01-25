import React from "react";
import HomeScreen from "./screens/HomeScreen";
import DashBoard from "./screens/DashBoard";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/header";
function App() {
  return (
    <HashRouter>
      <div>
        <div className="header-content">
        </div>
      </div>
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/DashBoard" component={DashBoard} exact />
      </main>
    </HashRouter>
  );
}

export default App;
