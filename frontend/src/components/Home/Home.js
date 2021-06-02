import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import HomeCards from "./HomeCards";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeCards />
      </div>
    );
  }
}

export default Home;