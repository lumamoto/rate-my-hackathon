import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import HackathonCard from "./HackathonCard";
import { Container, Header, Input, Message, Grid } from "semantic-ui-react";

class SearchHackathons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hackathons: [],
    };
  }

  // Show all hackathons when first visiting the page
  componentDidMount() {
    axios
      .get("http://localhost:8082/api/hackathons")
      .then((res) => {
        this.setState({
          hackathons: res.data,
        });
      })
      .catch((err) => {
        console.log("Error getting all hackathons in SearchHackathons");
      });
  }

  search = async (val) => {
    const res = await axios(
      `http://localhost:8082/api/hackathons/search?q=${val}`
    );
    const hackathons = await res.data;
    this.setState({ hackathons });
  };

  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderHackathons() {
    let hackathonsList = (
        <Message>
          <Grid textAlign="center">
            <Grid.Row>
              <br />
            </Grid.Row>
            <Grid.Row>
              <Header as="h2">No Hackathons Found</Header>
            </Grid.Row>
            <Grid.Row>
              <p>
                No hackathons were found that matched this query. Try searching
                for something else or{" "}
                <Link to={`/new-hackathon/`}>add a hackathon</Link>!
              </p>
            </Grid.Row>
            <Grid.Row>
              <br />
            </Grid.Row>
          </Grid>
        </Message>
    );
    
    if (this.state.hackathons.length >= 1) {
      let hackathonCards = this.state.hackathons.map((hackathon, k) => (
        <HackathonCard hackathon={hackathon} key={k} />
      ));

      // pad bottom if only 1 result appears so that footer is at bottom of page
      if (this.state.hackathons.length === 1) {
        hackathonsList = (
          <div style={{"padding-bottom" : "100px"}}>
            {hackathonCards}
          </div>
        )
      } else {
        hackathonsList = hackathonCards;
      }
    }
    return hackathonsList;
  }

  render() {
    return (
      <div>
        <Container textAlign="center">
          <Header as="h1" style={{ padding: "1.5em 0em 1.5em" }}>
            Search Hackathons
            <Header.Subheader>
              Search through hackathons in our database.
              <br/>
              Can't find the one you're looking for? <a href="/new-hackathon"> Add it!</a>
            </Header.Subheader>
          </Header>
          <Input
            fluid
            value={this.state.value}
            onChange={(e) => this.onChangeHandler(e)}
            placeholder="Search hackathons..."
          />
        </Container>
        
        <Container style={{ padding: "3em 0 0" }}>
          {this.renderHackathons}
        </Container>
      </div>
    );
  }
}

export default SearchHackathons;
