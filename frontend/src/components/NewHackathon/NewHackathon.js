import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { Header, Container, Form, Button, Divider } from "semantic-ui-react";

class NewHackathon extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      url: "",
      themes: [],
      reviews: [],
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  selectedItem = (e, data) => {
    this.setState({
      themes: data.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      description: this.state.description,
      url: this.state.url,
      themes: this.state.themes,
      reviews: [],
    };

    axios
      .post("http://localhost:8082/api/hackathons", data)
      .then((res) => {
        this.setState({
          name: "",
          description: "",
          url: "",
          themes: [],
          reviews: [],
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in NewHackathon!");
      });
  };

  render() {
    const themeOptions = [
      { key: "ar", text: "AR/VR", value: "AR/VR" },
      {
        key: "beginner",
        text: "Beginner Friendly",
        value: "Beginner Friendly",
      },
      { key: "blockchain", text: "Blockchain", value: "Blockchain" },
      { key: "communication", text: "Communication", value: "Communication" },
      { key: "cybersecurity", text: "Cybersecurity", value: "Cybersecurity" },
      { key: "design", text: "Design", value: "Design" },
      { key: "devops", text: "DevOps", value: "DevOps" },
      { key: "ecommerce", text: "E-commerce", value: "E-commerce" },
      { key: "education", text: "Education", value: "Education" },
      { key: "enterprise", text: "Enterprise", value: "Enterprise" },
      { key: "finance", text: "Finance", value: "Finance" },
      { key: "gaming", text: "Gaming", value: "Gaming" },
      { key: "health", text: "Health", value: "Health" },
      { key: "iot", text: "Internet of Things (IoT)", value: "IoT" },
      { key: "ml", text: "Machine Learning/AI", value: "ML/AI" },
      { key: "mobile", text: "Mobile", value: "Mobile" },
      { key: "art", text: "Art/Music", value: "Art/Music" },
      { key: "open", text: "Open Ended", value: "Open Ended" },
      { key: "productivity", text: "Productivity", value: "Productivity" },
      { key: "good", text: "Social Good", value: "Social Good" },
      { key: "web", text: "Web", value: "Web" },
    ];

    return (
      <div>
        <Container textAlign="center">
          <Header as="h1" style={{ padding: "1.5em 0em 1.5em" }}>
            Add a Hackathon
            <Header.Subheader>
              Add a new hackathon to our database to start recieving reviews.
            </Header.Subheader>
          </Header>
        </Container>

        <Container>
          <Form onSubmit={this.onSubmit}>
            <Header as="h3">Basic Info</Header>

            <Form.Input
              fluid
              required
              label="Name"
              placeholder="Hackathon name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Form.TextArea
              fluid
              required
              label="Description"
              placeholder="Tell us more about this hackathon..."
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />

            <Header as="h3">Additional Info</Header>
            {/* <Form.Input
              fluid
              label="Website URL"
              placeholder="https://www.ratemyhackathon.online"
              name="url"
              value={this.state.url}
              onChange={this.onChange}
            /> */}

            <Form.Select
              fluid
              multiple
              search
              label="Themes"
              placeholder="Hackathon themes"
              options={themeOptions}
              name="themes"
              value={this.state.themes}
              onChange={this.selectedItem}
            />

            <Divider hidden />
            <Button fluid primary type="submit">
              Add Hackathon
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewHackathon;
