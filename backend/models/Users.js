const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      unique: true,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    date: {
      type: Date,
      required: false,
    },

    type: {
      type: String,
      required: true,
      trim: true,
    },

    batch: {
      type: String,
      required: false,
    },

    age: {
      type: Number,
      required: false,
    },

    shopName: {
      type: String,
      required: false,
    },

    open: {
      type: String,
      required: false,
    },

    close: {
      type: String,
      required: false,
    },
  },

  {
    collection: "users",
  }
);

module.exports = User = mongoose.model("Users", UserSchema);
