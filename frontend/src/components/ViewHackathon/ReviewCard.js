import React from "react";
import "../../App.css";
import { Card, Label } from "semantic-ui-react";

const ReviewCard = (props) => {
  const review = props.review;

  var dateString = new Date(review.dateAdded).toDateString(); // turn date into readable string (MMM DD YYYY)
  dateString = dateString.substr(dateString.indexOf(" ") + 1); // remove day of week from date

  const tags = review.tags;

  let tagList;

  if (!tags) {
    tagList = "No tags!";
  } else {
    tagList = tags.map((tag) => <Label>{tag}</Label>);
  }

  return (
    <Card centered fluid>
      <Card.Content>
        <Card.Header>
          <span className="left">
            <h1>{review.rating} / 5</h1>
          </span>
        </Card.Header>
        <br />
        <Card.Description>{review.description}</Card.Description>
        <br />
        <Card.Meta>
          <span className="left">{dateString}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <span className="left">
          {tagList}
        </span>
        <span className="right">
          <i className="arrow up icon"></i> {review.numUp} &emsp;
          <i className="arrow down icon"></i> {review.numDown}
          {/* <i className="flag outline icon"></i> */}
        </span>
      </Card.Content>
    </Card>
  );
};

export default ReviewCard;
