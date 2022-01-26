import React from "react";
import HomeScreen from "./screens/HomeScreen";
import DashBoard from "./screens/DashBoard";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Form1 from "./screens/form1";
import DateTimeForm from "./screens/DateTimeForm";
import AboutPage from "./screens/AboutPage";

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
        <Route path="/Form1" component={Form1} exact />
        <Route path="/Datetime" component={DateTimeForm} exact />
        <Route path="/About" component={AboutPage} exact />
      </main>
    </HashRouter>
  );
}

export default App;
