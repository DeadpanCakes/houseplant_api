const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema({
  product: { type: mongoose.Types.ObjectId, ref: "Product" },
  dateAdded: Date,
});

const Listing = mongoose.model("Listing", listingSchema);

const listSchema = new Schema({
  name: String,
  description: String,
  listings: [{ type: mongoose.Types.ObjectId, ref: "Listing" }],
  isPublished: Boolean,
});

listSchema.virtual("url").get(function () {
  return `/lists/${this._id}`;
});

const List = mongoose.model("List", listSchema);

module.exports = { List, Listing };
