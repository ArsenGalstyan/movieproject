import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import './App.css';
import main from "./pages/main";
import movie from "./pages/movie";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/index" exact component={main}/>
            <Route path="/movie" exact component={movie}/>

            <Redirect from="/" to="/index" />
        </Switch>
    </Router>
  );
}

export default App;
