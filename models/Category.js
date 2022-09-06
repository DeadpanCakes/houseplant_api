import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  description: String,
});

export default new mongoose.model("Category", CategorySchema);
