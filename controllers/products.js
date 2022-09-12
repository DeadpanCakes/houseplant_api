const Product = require("../models/Product");
const Category = require("../models/Category");

const productController = () => {
  const post = async (req, res) => {
    try {
      const { name, description, price, stock, isPublished } = req.body;
      const category = await Category.findById(req.body.category).exec();
      const newProduct = await Product.create({
        name,
        description,
        price,
        stock,
        isPublished,
        category,
        discount: 0,
      });
      return res.json({ message: "Product Created", data: newProduct });
    } catch (error) {
      res.status(500).json({ message: "There Was An Error" });
    }
  };

  const get = (req, res) => {
    res.json({ message: "product of all lists" });
  };
  const getOne = (req, res) => {
    res.json({ message: `Send product whose id is ${req.params.id}` });
  };
  const put = (req, res) => {
    res.json(`update product whose id is ${req.params.id}`);
  };
  const del = (req, res) => {
    res.send(`delete product whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del };
};

module.exports = productController();
