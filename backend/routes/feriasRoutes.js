const express = require("express");
const multer = require("multer");
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
  destination: (req, file, callback) => {
    callback(null, "./backend/images");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "---" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine })/* .single('testImage'); */

router
  .route("/")
  .get(protect, getFerias)
  .post(protect, upload.single('image'), createFerias);
router.route("/:id").put(protect, updateFerias).delete(protect, deleteFerias);

module.exports = router;
