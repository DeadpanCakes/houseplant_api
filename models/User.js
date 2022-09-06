import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  address: {
    street: String,
    postal: String,
    state: String,
    country: String,
    city: String,
  },
  payment: {
    name: String,
    card: Number,
    verification: String,
  },
  orderHistory: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
  lists: [{ type: mongoose.Types.ObjectId, ref: "List" }],
});

export default model("User", userSchema);
