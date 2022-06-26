const mongoose = require("mongoose");
const moment = require("moment");

const feriasSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },

    firstName: {
      type: String,
      ref: "User",
    },

    workerNumber: {
      type: Number,
      ref: "User",
    },

    lastName: {
      type: String,
      ref: "User",
    },

    totalFerias: {
      type: Number,
      required: true,
    },

    ferias: {
      type: Array,
      default: [Date],
      required: true,
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
