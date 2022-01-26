import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Form1 from "./screens/form1";
import DateTimeForm from "./screens/DateTimeForm";
import DashBoardScreen from "./screens/DashBoardScreen";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PrivateRoute from "./components/PrivateRoute";

import AboutPage from "./screens/AboutPage";
import Reward from "./screens/Reward";
import History from "./screens/History";
function App() {
  return (
    <HashRouter>
      <div>
        <div className="main-cont">
          <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/DashBoard" component={DashBoardScreen} exact />
            <Route path="/Form1" component={Form1} exact />
            <Route path="/Datetime" component={DateTimeForm} exact />
            <Route path="/About" component={AboutPage} exact />
            <Route path="/Rewards" component={Reward} exact />
            <Route path="/History" component={History} exact />
            {/* private routes */}
            <PrivateRoute
              path="/dashboard"
              component={DashBoardScreen}
            ></PrivateRoute>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
