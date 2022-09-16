const Product = require("../models/Product");
const { List, Listing } = require("../models/List");

const listController = () => {
  const post = async (req, res) => {
    try {
      const { name, description, isPublished } = req.body;
      const list = await List.create({
        name,
        description,
        isPublished,
        listings: [],
      });
      return res.json({ message: "List Created", data: list });
    } catch (error) {
      return res.status(500).json({ message: "An Error Has Occurred", error });
    }
  };
  const get = async (req, res) => {
    const lists = await List.find();
    res.json({ message: "Lists Gotten", lists });
  };
  const getOne = async (req, res) => {
    const list = await List.findById(req.params.id);
    if (list) {
      return res.json({ message: `Got ${list.name}`, list });
    } else {
      return res.json({ message: "List Does Not Exsit", list });
    }
  };
  const put = async (req, res) => {
    const updatedList = await List.findByIdAndUpdate(
      req.params.id,
      req.body.update,
      { new: true }
    );
    res.json({ message: `Updated`, updatedList });
  };
  const addItem = async (req, res) => {
    try {
      const product = await Product.findById(req.params.product);
      const dateAdded = new Date();
      const listing = await Listing.create({
        product: req.params.product,
        dateAdded,
      });
      const list = await List.findById(req.params.id);
      const updatedList = await List.findByIdAndUpdate(req.params.id, {
        listings: list.listings.concat(listing),
      });
      return res.json({
        message: `${product.name} Added To ${list.name}`,
        data: updatedList,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "An Error Has Occurred", error });
    }
  };
  const removeItem = async (req, res) => {
    try {
      const listing = await Listing.findByIdAndDelete(req.params.listing);
      const list = await List.findById(req.params.id);
      const updatedList = await List.findByIdAndUpdate(req.params.id, {
        listings: list.listings.filter(
          (l) => {
            return l._id.toString() !== req.params.listing;
          },
          { returnDocument: "after" }
        ),
      });
      return res.json({ message: "Listing Deleted", data: listing });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "An Error Has Occurred", error });
    }
  };
  const del = (req, res) => {
    res.send(`delete list whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del, addItem, removeItem };
};

module.exports = listController();
