const mongoose = require("mongoose");
const Ferias = require("./feriasModel").schema;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      required: [true, "Please enter a valid name"],
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
      enum: [
        "eletrificacao",
        "montagem",
        "preparacao",
        "desenho",
        "serralharia",
        "fresador",
        "pneumatica",
        "RH",
        "CNC",
      ],
      required: true,
    },

    chefia: {
      type: String,
      required: true,
    },

    //userFerias: Array,
    userFerias: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ferias",
    },

    role: {
      type: String,
      enum: ["trabalhador", "chefia", "RH"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
