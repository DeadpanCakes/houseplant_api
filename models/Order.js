import mongoose from "mongoose";
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

export default mongoose.model("Order", orderSchema);
