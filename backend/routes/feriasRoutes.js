const express = require("express");
const router = express.Router();

const {
  getFerias,
  createFerias,
  updateFerias,
  deleteFerias,
} = require("../controllers/feriasController");

router.route("/").get(getFerias).post(createFerias);
router.route("/:id").put(updateFerias).delete(deleteFerias);

module.exports = router;