const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ferias = require("../models/feriasModel");

// @ desc     Get Users
// @ route    GET /api/v1/users
// @ access   private
const getUsers = asyncHandler(async (req, res) => {
  const allResults = await User.countDocuments({});

  const ferias = await Ferias.find();
  const test = ferias.map((user) => user.ferias);

  console.log(req.user._id);
  //console.log(ferias);

  //fazer condicao para todos casos recusados
  if (req.user.role === "trabalhador") {
    res.status(400);
    throw new Error("User not authorized");
  } else if (req.user.role === "chefia") {
    const usersChefia = await User.find({ role: "trabalhador" });
    res.status(200).json({
      data: usersChefia,
    });
  } else if (req.user.role === "RH") {
    const usersRH = await User.find();
    console.log(usersRH);
    res.status(200).json({
      data: usersRH
    });
  }
});

// @desc   Register User
// @route  POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    workerNumber,
    sectionOfWork,
    chefia,
    role,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !workerNumber ||
    !sectionOfWork ||
    !chefia ||
    !role
  ) {
    res.status(400);
    throw new Error("Please enter valid fields");
  }

  //check if user is already registered
  const userExists = await User.findOne({ workerNumber: workerNumber });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //bcrypring password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create a new account
  const user = await User.create({
    //_id: user.id,
    name,
    email,
    password: hashedPassword,
    workerNumber,
    sectionOfWork,
    chefia,
    role,
    //token: generateToken(user._id),
  });

  const ferias = await Ferias.find({ user: user._id });
  const test = ferias.map((user) => user.ferias);

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      workerNumber: user.workerNumber,
      sectionOfWork: user.sectionOfWork,
      chefia: user.chefia,
      role: user.role,
      //ferias: user.ferias,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User does not exist");
  }
});

// @desc   Authenticate User
// @route  POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check fo user email
  const user = await User.findOne({ email });

  const ferias = await Ferias.find({ user: user._id });
  const test = ferias.map((user) => user.ferias);
  const test2 = ferias.map((user) => user.horas);
  console.log(test2);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      workerNumber: user.workerNumber,
      sectionOfWork: user.sectionOfWork,
      chefia: user.chefia,
      role: user.role,
      ferias: {...test},
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc   Get User data
// @route  GET /api/users/me
// @access private
const getMe = asyncHandler(async (req, res) => {
  const ferias = await Ferias.find({ user: req.user._id });
  const test = ferias.map((user) => user.ferias);

  res.status(200).json({ user: req.user, ferias: test });
});

// @desc   Get User data
// @route  GET /api/users/:id
// @access private
const getUserByID = asyncHandler(async (req, res) => {
  const { workerNumber } = req.body;
  const user = await User.findOne({ workerNumber });

  const ferias = await Ferias.find({ user: user._id });
  const test = ferias.map((user) => user.ferias);
  //console.log(user._id);
  //console.log(test);
  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    workerNumber: user.workerNumber,
    sectionOfWork: user.sectionOfWork,
    chefia: user.chefia,
    role: user.role,
    ferias: test,
  });
});

//generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getUsers,
  getUserByID,
};
