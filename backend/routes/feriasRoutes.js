const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const {
  getFerias,
  createFerias,
  updateFerias,
  deleteFerias,
} = require("../controllers/feriasController");

const { protect } = require("../middlewares/authMiddleware");

//UPLOADER WITH MULTER PACKAGE  - MIDDLEWARE
const fileStorageEngine = multer.diskStorage({
  destination: "./backend/images",
  filename: (req, file, callback) => {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: fileStorageEngine,
  limits: { fileSize: 1000000 },
}).single("image"); /* .single('testImage'); */

router.route("/").get(protect, getFerias).post(protect, upload, createFerias);
router.route("/:id").put(protect, updateFerias).delete(protect, deleteFerias);

module.exports = router;
