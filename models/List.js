import mongoose, { isValidObjectId } from "mongoose";
const { Schema } = mongoose;

const listingSchema = new Schema({
  item: { type: mongoose.Types.ObjectId, ref: "Product" },
  dateAdded: Date,
});

const Listing = mongoose.model("Listing", listingSchema);

const listSchema = new Schema({
  name: String,
  description: String,
  listings: [{ type: mongoose.Types.ObjectId, ref: "Listing" }],
});

export default mongoose.model("List", listSchema);
