import React, { Component } from "react";
import logo from "../assets/RMH_black.png";
import {
  Button,
  Container,
  Grid,
  Icon,
  Menu,
  Image,
} from "semantic-ui-react";
// import Login from "./Login"
// import Logout from "./Logout"

class NavBar extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none",
    },
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    return (
      <div>
        {/* For Tablet / Computer */}
        <Grid padded className="tablet computer only">
          <Menu borderless fluid>
            <Container>
              <Menu.Item header as="a" href="/">
                <Image src={logo} size="tiny"></Image>
              </Menu.Item>
              <Menu.Item
                name="home"
                href="/"
              />
              <Menu.Item
                name="search"
                href="/search"
              />
              <Menu.Item
                name="addAHackathon"
                href="/new-hackathon"
              />

              {/* <Menu.Menu position="right">
                <Menu.Item>
                  <Login />
                </Menu.Item>
                <Menu.Item>
                  <Logout />
                </Menu.Item>
              </Menu.Menu> */}
            </Container>
          </Menu>
        </Grid>

        {/* For Mobile */}
        <Grid padded className="mobile only">
          <Menu borderless fluid size="huge">
            <Menu.Item header as="a" href="/">
              <Image src={logo} size="tiny"></Image>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  basic
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              fluid
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item as="a" href="/">
                Home
              </Menu.Item>
              <Menu.Item as="a" href="/search">
                Search
              </Menu.Item>
              <Menu.Item as="a" href="/new-hackathon">
                Add a Hackathon
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
      </div>
    );
  }
}

export default NavBar;
