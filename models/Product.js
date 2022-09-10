const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  stock: String,
  price: Number,
  discount: Number,
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  isPublished: Boolean,
});

module.exports = new mongoose.model("Product", productSchema);
