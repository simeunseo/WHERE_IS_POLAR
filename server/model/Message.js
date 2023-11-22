const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const messageSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
// });

const messageSchema = new Schema({
  dream: {
    type: String,
    required: true,
  },
  why: {
    type: String,
    required: false,
  },
  when: {
    type: String,
    required: false,
  },
  what: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  nameAge: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  deepInterview: {
    type: Boolean,
    required: true,
  },
  imgSrc: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Message", messageSchema);

// messages
