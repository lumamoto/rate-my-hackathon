import React from "react";
import { Container } from "semantic-ui-react";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>
          <span className="left">
            Rate My Hackathon, 2021. &#8201;
            <br />
            Made with ♥ by
            <a href="https://github.com/lumamoto" className="px-1 text-muted">
              {" "}
              Lacey Umamoto
            </a>
            .
          </span>

          <span className="right">
            <a href="https://github.com/lumamoto/rate-my-hackathon-frontend">
              <i className="github icon"></i>
            </a>
          </span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
