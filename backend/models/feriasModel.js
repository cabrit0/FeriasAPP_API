const mongoose = require("mongoose");
const moment = require("moment");

const feriasSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      ref: "User",
    },

    workerNumber: {
      type: Number,
      ref: "User",
    },

    sectionOfWork: {
      type: String,
      ref: "User",
    },

    role: {
      type: String,
      ref: "User",
    },

    chefia: {
      type: String,
      ref: "User",
    },

    totalFerias: {
      type: Number,
      //required: true,
    },

    ferias: {
      type: Object,
      dia: {
        type: Array,
        required: true,
      },
      hora: {
        type: Array,
        required: true,
      },
      //default: [Date],
    },

    tipoFerias: {
      type: String,
      required: true,
    },

    modo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ferias", feriasSchema);
