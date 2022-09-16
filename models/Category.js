const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  description: String,
});

categorySchema.virtual("url").get(function () {
  return `/categories/${this._id}`;
});

module.exports = new mongoose.model("Category", categorySchema);
