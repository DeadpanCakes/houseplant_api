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
  const del = (req, res) => {
    res.send(`delete list whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del };
};

module.exports = listController();
