const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  items: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  address: {
    street: String,
    postal: String,
    state: String,
    country: String,
    city: String,
  },
  dateOrdered: Date,
  shipping: Number,
  tax: Number,
  total: Number,
});

module.exports = mongoose.model("Order", orderSchema);
