const bcrypt = require("bcrypt");

const verifyPass = async (pass, hash) => {
  return await bcrypt.compare(pass, hash);
};

module.exports = verifyPass;
