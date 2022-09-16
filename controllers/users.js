const User = require("../models/User");

const userController = () => {
  const post = async (req, res) => {
    const authSubmitted = (req) => {
      return req.body.email && req.body.password;
    };
    if (authSubmitted(req)) {
      const { email, password } = req.body;
      const user = await User.create({ email, password });
      return res.json({ message: "User Created", user });
    } else {
      res.status(400).json({ message: "Email and password required" });
    }
  };
  const get = async (req, res) => {
    const users = await User.find();
    res.json({ message: "Got Users", users });
  };
  const getOne = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json({ message: `Got User`, user });
  };
  const put = (req, res) => {
    res.json(`update user whose id is ${req.params.id}`);
  };
  const del = (req, res) => {
    res.send(`delete user whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del };
};

module.exports = userController();
