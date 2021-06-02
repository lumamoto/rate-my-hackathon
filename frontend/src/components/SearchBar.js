import React from "react";
import { Form, Input } from "semantic-ui-react";

const SearchBar = (term) => (
  <Form action="/hackathons/search" method="get">
    <Input
      fluid
      icon="search"
      size="large"
      type="text"
      id="header-search"
      placeholder="Search hackathons..."
      name="q"
    />
    <input type="hidden" value={term} />
  </Form>
);

export default SearchBar;
