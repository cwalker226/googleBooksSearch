import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <div>
          <Banner/>
        </div>
          <Route exact path="/" component={Search}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
      </div>
    </Router>
  );
}


export default App;
