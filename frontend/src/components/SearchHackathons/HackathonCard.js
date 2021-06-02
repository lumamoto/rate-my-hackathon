import React from "react";
import { Card, Label } from "semantic-ui-react";

function calculateAvgRating(ratings) {
  var sum = 0;
  for (var i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  var avg = sum / ratings.length;
  avg = Math.round(avg * 10) / 10; // round to nearest decimal
  return avg;
}

const HackathonCard = (props) => {
  const hackathon = props.hackathon;

  // get avg rating
  let avgRating, ratingString;
  if (hackathon.reviews.length > 0) {
    var ratings = [];
    const reviews = hackathon.reviews;
    for (var i = 0; i < reviews.length; i++) {
      ratings.push(reviews[i].rating);
    }
    avgRating = calculateAvgRating(ratings);
    ratingString = avgRating + " / 5";
  } else {
    ratingString = "No Rating";
  }

  const themes = hackathon.themes;

  let themeList;

  if (!themes) {
    themeList = "No themes!";
  } else {
    themeList = themes.map((theme) => <Label>{theme}</Label>);
  }

  return (
    <Card centered fluid href={`/hackathon/${hackathon._id}`}>
      <Card.Content>
        <Card.Header>
          <h1>
            <span className="left">{hackathon.name}</span>
            <span className="right">{ratingString}</span>
          </h1>
        </Card.Header>
        <Card.Description>{hackathon.description}</Card.Description>
        <br />
        <Card.Meta>
        {themeList}
        </Card.Meta>
      </Card.Content>
    </Card>

    // <Card centered fluid href={`/hackathon/${hackathon._id}`}>
    //   <Card.Content header={hackathon.name}/>
    //   <Card.Content description={hackathon.description} />
    //   <Card.Content extra>
    //   {avgRating} / 5 based on {numReviews} reviews
    //   </Card.Content>
    // </Card>
  );
};

export default HackathonCard;
