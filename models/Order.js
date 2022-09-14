const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  product: { type: mongoose.Types.ObjectId, ref: "Product" },
  quantity: Number,
});

const OrderItem = mongoose.model("OrderItem", itemSchema);

const orderSchema = new Schema({
  items: [{ type: mongoose.Types.ObjectId, ref: "OrderItem" }],
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

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, OrderItem };
