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
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  phrase: {
    type: String,
    required: true,
  },
  what: {
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
  how: {
    type: String,
    required: false,
  },
  archivedAt: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  deepInterview: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);

// messages
