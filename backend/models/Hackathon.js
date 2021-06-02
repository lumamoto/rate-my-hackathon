const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  numUp: {
    type: Number,
    default: 0,
    required: true,
  },
  numDown: {
    type: Number,
    default: 0,
    required: true,
  },
  dateAdded: {
    type: Date,
  },
  dateUpdated: {
    type: Date,
  },
//   author: {
//     type: UserSchema
//   },
});

const HackathonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: {
    type: [ReviewSchema],
    default: [],
  },
  url: {
    type: String,
    default: "",
  },
  themes: {
    type: [String],
    default: [],
  },
  dateAdded: {
    type: Date,
  },
  dateUpdated: {
    type: Date,
  },
  // author: {
  //   type: UserSchema,
  // },
});

module.exports.HackathonSchema = HackathonSchema;
module.exports = Hackathon = mongoose.model("hackathon", HackathonSchema);
