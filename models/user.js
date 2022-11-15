const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  // id: {
  //     type: 'number',
  //     required: true
  // },

    firstName: {
        type: "string",
        required: true,
    },
    lastName: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
        unique: true,
    },
    password: {
        type: "string",
        required: true,
    },

});

const User = mongoose.model("user", userSchema);

module.exports = User;
