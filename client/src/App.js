import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Form1 from "./screens/form1";
import DateTimeForm from "./screens/DateTimeForm";
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

            {/* private routes */}
            <PrivateRoute
              path="/dashboard"
              component={DashBoardScreen}
            ></PrivateRoute>
          </main>
        </div>
      </div>
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/DashBoard" component={DashBoard} exact />
        <Route path="/Form1" component={Form1} exact />
        <Route path="/Datetime" component={DateTimeForm} exact />
        <Route path="/About" component={AboutPage} exact />
        <Route path="/Rewards" component={Reward} exact />
        <Route path="/History" component={History} exact />
      </main>
    </HashRouter>
  );
}

export default App;
