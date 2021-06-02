import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Button } from "semantic-ui-react";

const HomeHeader = () => {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 700, padding: "1em 0em" }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Rate My Hackathon"
          inverted
          style={{
            fontSize: "3.5em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em",
          }}
        />
        <Header
          as="h3"
          content="RMH allows hackers to rate hackathons so that others can 
            discover which ones to look out for and which ones to avoid."
          inverted
          style={{
            // fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
            marginBottom: "1.5em",
          }}
        />
        <Link to="/search">
          <Button primary size="huge">Search for a hackathon</Button>
        </Link>
      </Container>
    </Segment>
  );
};

export default HomeHeader;
