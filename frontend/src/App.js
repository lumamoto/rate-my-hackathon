import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";

import NewHackathon from "./components/NewHackathon/NewHackathon";
import SearchHackathons from "./components/SearchHackathons/SearchHackathons";
import ViewHackathon from "./components/ViewHackathon/ViewHackathon";
// import UpdateHackathon from "./pages/UpdateHackathon";
import NewReview from "./components/NewReview/NewReview";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="body">
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchHackathons} />
            <Route path="/new-hackathon" component={NewHackathon} />
            <Route path="/hackathon/:id" component={ViewHackathon} />
            <Route path="/new-review/:id" component={NewReview} />
            {/* <Route path='/edit-hackathon/:id' component={UpdateHackathon} /> */}
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
