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
  const get = (req, res) => {
    res.json({ message: "list of all lists" });
  };
  const getOne = (req, res) => {
    res.json({ message: `Send list whose id is ${req.params.id}` });
  };
  const put = (req, res) => {
    res.json(`update list whose id is ${req.params.id}`);
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
