const asyncHandler = require("express-async-handler");

const Ferias = require("../models/feriasModel");
const User = require("../models/userModel");

// @ desc     Get Ferias
// @ route    GET /api/v1/ferias
// @ access   private
const getFerias = asyncHandler(async (req, res) => {
  const ferias = await Ferias.find({ user: req.user.id });
  res.status(200).json(ferias);
});

// @ desc     Create Ferias
// @ route    POST /api/v1/ferias
// @ access   private
const createFerias = asyncHandler(async (req, res) => {
  if (
    !req.body.totalFerias ||
    !req.body.ferias ||
    !req.body.tipoFerias ||
    !req.body.modo
  ) {
    res.status(404);
    throw new Error("Please enter input fields");
  }

  const feria = await Ferias.create({
    user: req.user.id,
    totalFerias: req.body.totalFerias,
    ferias: req.body.ferias,
    tipoFerias: req.body.tipoFerias,
    modo: req.body.modo,
  });
  res.status(200).json(feria);
});

// @ desc     Update Ferias
// @ route    PUT /api/v1/ferias/:id
// @ access   private
const updateFerias = asyncHandler(async (req, res) => {
  const feria = await Ferias.findById(req.params.id);

  if (!feria) {
    res.status(400);
    throw new Error("Féria not found");
  }

  //check if user exists
  if (feria.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedFeria = await Ferias.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedFeria);
});

// @ desc     Delete Ferias
// @ route    DELETE /api/v1/ferias/:id
// @ access   private
const deleteFerias = asyncHandler(async (req, res) => {
  const feria = await Ferias.findById(req.params.id);

  if (!feria) {
    res.status(400);
    throw new Error("Féria not found");
  }

  res.json({
    message: "Féria deleted",
  });

  //check if user exists
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //ensure logged in user matches feria user
  if (feria.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await feria.remove();
  
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getFerias,
  createFerias,
  updateFerias,
  deleteFerias,
};
