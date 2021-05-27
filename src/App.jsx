import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import main from "./pages/main";
import movie from "./pages/movie";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={main}/>
            <Route path="/movie" exact component={movie}/>
        </Switch>
    </Router>
  );
}

export default App;
