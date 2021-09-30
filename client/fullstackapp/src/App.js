import "./App.css";
//import axios from "axios";
//import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Home1 from "./Pages/samplePage";
import Register from "./Pages/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/Home" exact component={Home} />
          <Route path="/samplepage" exact component={Home1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
