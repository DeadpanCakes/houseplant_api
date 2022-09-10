const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  description: String,
});

module.exports = new mongoose.model("Category", categorySchema);
