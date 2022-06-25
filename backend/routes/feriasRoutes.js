const express = require("express");
const router = express.Router();

const {
  getFerias,
  createFerias,
  updateFerias,
  deleteFerias,
} = require("../controllers/feriasController");

const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getFerias).post(protect, createFerias);
router.route("/:id").put(protect, updateFerias).delete(protect, deleteFerias);

module.exports = router;
