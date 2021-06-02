import React from "react";
import { Grid, Header, Image, Container } from "semantic-ui-react";

import teamImg from "../../assets/team.svg";
import shareImg from "../../assets/share.svg";
import upvoteImg from "../../assets/upvote.svg";

const HomeCards = () => {
  return (
    <Container>
      <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column>
            <Image src={teamImg} width="100%" height="375" alt="Team" />
            <Header as="h2" textAlign="center">
              Search for hackathons
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Image src={shareImg} width="100%" height="375" alt="Share" />
            <Header as="h2" textAlign="center">
              Share your experiences anonymously
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Image src={upvoteImg} width="100%" height="375" alt="Upvote" />
            <Header as="h2" textAlign="center">
              Support others' reviews
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default HomeCards;
