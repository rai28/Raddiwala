import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PrivateRoute from "./components/PrivateRoute";
import SigninScreen from "./screens/SigninScreen";
import DashBoardScreen from "./screens/DashBoardScreen";
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
    </HashRouter>
  );
}

export default App;
