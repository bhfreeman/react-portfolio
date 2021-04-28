import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'


function App() {
  return (
    <div>
      <Router>
        <div className="container-fluid vh-100">
          <div className="row h-100 flex-wrap">
          <Navbar />
          <Route exact path ="/" component={Home} />
          <Route exact path ="/portfolio" component={Portfolio} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
