const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getUsers,
  getUserByID,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

router.get("/", protect, getUsers);
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getUserByID);
router.get("/me", protect, getMe);

module.exports = router;
