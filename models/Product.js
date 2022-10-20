const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  stock: Number,
  price: Number,
  discount: Number,
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  isPublished: Boolean,
});

productSchema.virtual("url").get(function () {
  return `/products/${this._id}`;
});

module.exports = new mongoose.model("Product", productSchema);
