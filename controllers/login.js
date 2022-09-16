const User = require("../models/User");
const verifyPass = require("../auth/verifyPass");

const loginController = () => {
  const post = async (req, res) => {
    const authSubmitted = (req) => {
      return req.body.email && req.body.password;
    };
    if (authSubmitted(req)) {
      const user = await findUser(req.body.email);
      const hash = user ? user.password : { password: "" };
      const isValid = await verifyPass(req.body.password, hash);
      if (user && isValid) {
        return res.json({ message: "logged in" });
      } else {
        return res.json({
          message:
            "Something went wrong. Check information provided and try again",
        });
      }
    } else {
      res.status(400).json({ message: "Username and password required" });
    }
  };
  return { post };
};

const findUser = async (email) => {
  return await User.findOne({ email: email }).populate("password");
};

const validatePass = (user, providedPass) => user.password === providedPass;

module.exports = loginController();
