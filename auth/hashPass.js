const bcrypt = require("bcrypt");

const saltRounds = 10;

const hash = (pass, storeInDB) => bcrypt.hash(pass, saltRounds, storeInDB);

module.exports = hash;
