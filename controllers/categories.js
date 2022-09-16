const Category = require("../models/Category");
const ObjectId = require("mongoose").Types.ObjectId;

const categoryController = () => {
  const post = (req, res) => {
    const { name, description } = req.body;
    Category.create({ name, description }, (err, category) => {
      if (err) {
        return res.json({ message: "An Error Has Occurred" });
      }
      return res.json({ message: "Category Created", data: category });
    });
  };
  const get = (req, res) => {
    Category.find().then((categories) => {
      return res.json({ categories });
    });
  };
  const getOne = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      Category.findById(req.params.id).then((category) => {
        if (category) {
          return res.json({ category });
        }
        return res.status(400).json({ error: "", data: null });
      });
    } else {
      return res.status(400).json({ error: "ID Invalid", data: null });
    }
  };
  const put = async (req, res) => {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body.update,
      { new: true }
    );
    res.json({ message: `Updated`, updatedCategory });
  };
  const del = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    const categories = await Category.find();
    res.json({ message: "Deleted", categories });
  };
  return { post, get, getOne, put, del };
};

const queryError = () => {};

module.exports = categoryController();
