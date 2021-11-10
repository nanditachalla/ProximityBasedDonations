import "./App.css";
//import axios from "axios";
//import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ContactUs from "./Pages/ContactUs";
import IndPost from "./Pages/IndPost";
import CreatePost from "./Pages/createPost";
import ViewPost from "./Pages/viewPosts";
import fHome from "./Pages/fHome";
import Filler from "./Pages/Filler";
import Home1 from "./Pages/Home1";
import IndPost2 from "./Pages/IndPost2";
import Profile1 from "./Pages/Profile1";
import ContactUs1 from "./Pages/ContactUs1";
import About1 from "./Pages/About1";
import DelAcc1 from "./Pages/DelAcc1";
import DelAcc from "./Pages/DelAcc";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Register" exact component={Register} />
          <Route path="/Home/:email" exact component={Home} />
          <Route path="/" exact component={fHome} />
          <Route path="/samplePage" exact component={Login} />
          <Route path="/About/:email" exact component={About} />
          <Route path="/Profile/:email" exact component={Profile} />
          <Route path="/ContactUs/:email" exact component={ContactUs} />
          <Route path="/CreatePost/:email" exact component={CreatePost} />
          <Route path="/IndPost/:email" exact component={IndPost} />
          <Route path="/viewPosts/:email" exact component={ViewPost} />
          <Route path="/Filler" exact component={Filler} />
          <Route path="/Home1/:email" exact component={Home1} />
          <Route path="/IndPost2/:email" exact component={IndPost2} />
          <Route path="/Profile1/:email" exact component={Profile1} />
          <Route path="/ContactUs1/:email" exact component={ContactUs1} />
          <Route path="/About1/:email" exact component={About1} />
             <Route path="/DelAcc1/:email" exact component={DelAcc1} />
          <Route path="/DelAcc/:email" exact component={DelAcc} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
