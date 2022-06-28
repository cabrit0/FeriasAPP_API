const mongoose = require("mongoose");
const Ferias = require("./feriasModel").schema;

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: [true, "Please enter a valid email address"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please enter a password"],
    },

    workerNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    sectionOfWork: {
      type: String,
      required: true,
    },

    chefia: {
      type: String,
      required: true,
    },

    userFerias: [
      {
        type: Array,
      },
    ],

    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
